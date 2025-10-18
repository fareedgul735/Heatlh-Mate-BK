import express from "express";
import router from "./routes/authRouter.js";
import cors from "cors";
import sendOtpRouter from "./routes/sendOtpRouter.js";
import forgetPasswordRouter from "./routes/forgetPasswordRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", router);
app.use("/api/security", sendOtpRouter);
app.use("/api/auth", forgetPasswordRouter);

export default app;
