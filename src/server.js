import app from "./app.js";
import connectDB from "./config/db.js";
import { LOCALHOST, PORT } from "./lib/constant.js";
import dotenv from "dotenv";
dotenv.config();

const startServer = async () => {
  await connectDB();
  app.listen(PORT, LOCALHOST, () => {
    console.log(`server is on ${LOCALHOST} ${PORT}`);
  });
};

startServer();
