import { Router } from "express";

import validator from "../middlewares/validator.js";
import signupSchema from "../validator/auth/validator.signup.js";
import signinSchema from "../validator/auth/validator.signin.js";
import {
  signinController,
  signupController,
} from "../controllers/authController.js";

const router = Router();

router.post("/signup", validator(signupSchema), signupController);

router.post("/login", validator(signinSchema), signinController);


export default router;
