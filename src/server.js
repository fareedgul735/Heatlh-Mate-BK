import app from "./app.js";
import connectDB from "./config/db.js";
import { HOST, PORT } from "./lib/constant.js"; 
import dotenv from "dotenv";

dotenv.config();

const startServer = async () => {
  await connectDB();
  app.listen(PORT, HOST, () => {
    console.log(`🚀 Server is running on ${HOST}:${PORT}`);
  });
};

startServer();
