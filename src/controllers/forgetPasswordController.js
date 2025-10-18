import generateOtpNum from "../lib/helpers/OTP.js";
import UserAuth from "../models/auth.schema.js";
import Otp from "../models/otp.schema.js";
import sendOtpNotificationForgetPassword from "../utils/transporter/sendForgetPasswordTransporter.js";

const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ msg: "email is required" });
    }
    const user = await UserAuth.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const otp = generateOtpNum();
    const expiresAt = new Date(Date.now() + 60 * 1000);

    await Otp.deleteMany({ email });
    await Otp.create({ email, otp, expiresAt });

    await sendOtpNotificationForgetPassword(email, otp);
    res.status(200).json({ msg: "Otp Sent SuccessFully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Failed to send OTP", error: err.message });
  }
};

export default forgetPassword;
