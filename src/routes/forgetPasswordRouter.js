import { Router } from "express";
import forgetPassword from "../controllers/forgetPasswordController.js";
import validator from "../middlewares/validator.js";
import forgetPasswordSchema from "../validator/auth/validator.forgetPassword.js";
import resetPassword from "../controllers/resetPasswordController.js";
import resetPasswordSchema from "../validator/auth/validator.resetPassword.js";

const forgetPasswordRouter = Router();

forgetPasswordRouter.post(
  "/forgetPassword",
  validator(forgetPasswordSchema),
  forgetPassword
);
forgetPasswordRouter.post(
  "/resetPassword",
  validator(resetPasswordSchema),
  resetPassword
);

export default forgetPasswordRouter;
