import express from "express";
import router from "./routes/authRouter.js";
import cors from "cors";
import sendOtpRouter from "./routes/sendOtpRouter.js";
import forgetPasswordRouter from "./routes/forgetPasswordRouter.js";
import getUserDataRouter from "./routes/getUserDataRouter.js";
import reportsAiRouter from "./routes/reportRoutes.js";

const app = express();

app.use(cors("https://health-mate-two-sandy.vercel.app/health_mate"));
app.use(express.json());
app.use("/api/auth", router);
app.use("/api/security", sendOtpRouter);
app.use("/api/auth", forgetPasswordRouter);
app.use("/api/data", getUserDataRouter);
app.use("/api/upload", reportsAiRouter);
export default app;
