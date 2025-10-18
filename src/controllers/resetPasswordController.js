import UserAuth from "../models/auth.schema.js";
import { hashedPassword } from "../utils/hash.js";

const resetPassword = async () => {
  try {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

    const user = await UserAuth.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const convertHashedPassword = hashedPassword();

    user.password = convertHashedPassword;
    await user.save();

    res.status(200).json({ msg: "Password reset successfully" });
  } catch (err) {
    console.error("Reset password error:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};
export default resetPassword;
