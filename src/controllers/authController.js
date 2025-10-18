import UserAuth from "../models/auth.schema.js";
import { comparePssword, hashedPassword } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";
import Otp from "../models/otp.schema.js";
import sendLoginNotification from "../utils/transporter/sentLoginNotification.js";

export const signupController = async (req, res) => {
  const { firstName, lastName, userName, email, password } = req.body;

  try {
    const existingUser = await UserAuth.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashed = await hashedPassword(password);

    const user = await UserAuth.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashed,
    });

    const token = generateToken(user._id);

    await Otp.deleteMany({ email });

    return res
      .status(201)
      .json({ msg: "User Created Successfully", token, user: user.userName });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Invalid  Expired Otp", error: err.message });
  }
};

export const signinController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserAuth.findOne({ email });
    if (!user) res.status(400).json({ msg: "Invalid Credentials" });

    const isMatchPass = await comparePssword(password, user.password);

    if (!isMatchPass) res.status(400).json({ msg: "Invalid Credentials" });
    
    sendLoginNotification(user.email, user.userName);

    const token = generateToken(user._id);

    return res.status(201).json({
      msg: "Login success",
      token,
      user: { id: user._id, userName: user.userName, userEmail: user.email },
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};
