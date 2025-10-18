import crypto from "crypto";

const generateOtpNum = (digits = 4) => {
  const min = 10 ** (digits - 1);
  const max = 10 ** digits;
  const otp = crypto.randomInt(min, max).toString();
  return otp;
};

export default generateOtpNum;
