import Otp from "../models/otp.schema.js";

const verfiyOtpController = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const recordOtp = await Otp.findOne({ email, otp });
    if (!recordOtp) {
      return res.status(400).json({ msg: "Invalid Otp" });
    }
    if (recordOtp.expiresAt < new Date()) {
      await Otp.deleteMany({ email });
      return res.status(400).json({ msg: "Otp Expired" });
    }
    return res.status(200).json({ msg: "OTP verified successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error", error: err.message });
  }
};

export default verfiyOtpController;
