import express from "express";
import router from "./routes/authRouter.js";
import cors from "cors";
import sendOtpRouter from "./routes/sendOtpRouter.js";
import forgetPasswordRouter from "./routes/forgetPasswordRouter.js";
import getUserDataRouter from "./routes/getUserDataRouter.js";
import reportsAiRouter from "./routes/reportRoutes.js";
import getReports from "./routes/getReportsRouter.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://health-mate-two-sandy.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/auth", router);
app.use("/api/security", sendOtpRouter);
app.use("/api/auth", forgetPasswordRouter);
app.use("/api/data", getUserDataRouter);
app.use("/api/upload", reportsAiRouter);
app.use("/api/get",getReports)
export default app;
