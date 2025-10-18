import Joi from "joi";

const verifyOtpSchema = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string().required(),
});

export default verifyOtpSchema;
