import generateOtpNum from "../lib/helpers/OTP.js";
import Otp from "../models/otp.schema.js";
import sendOtpNotification from "../utils/transporter/sendOtpTransporter.js";

export const sendOtpController = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ msg: "email is required" });
    }
    const otp = generateOtpNum();
    const expiresAt = new Date(Date.now() + 60 * 1000);

    await Otp.deleteMany({ email });
    await Otp.create({ email, otp, expiresAt });

    sendOtpNotification(email, otp);

    return res.status(201).json({ msg: "OTP sent successfully" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ msg: "Failed to send OTP", error: err.message });
  }
};
