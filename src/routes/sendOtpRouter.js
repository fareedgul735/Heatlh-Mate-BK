import { Router } from "express";
import { sendOtpController } from "../controllers/sendOtpController.js";
import validator from "../middlewares/validator.js";
import otpSchema from "../validator/auth/validator.otp.js";
import verifyOtpSchema from "../validator/auth/validator.verifyOtp.js";
import verfiyOtpController from "../controllers/verifyOtpController.js";

const sendOtpRouter = Router();

sendOtpRouter.post("/sendOtp", validator(otpSchema), sendOtpController);
sendOtpRouter.post(
  "/verifyOtp",
  validator(verifyOtpSchema),
  verfiyOtpController
);

export default sendOtpRouter;
