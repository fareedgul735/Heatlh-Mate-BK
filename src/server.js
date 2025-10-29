import app from "./app.js";
import connectDB from "./config/db.js";
import { HOST, PORT } from "./lib/constant.js";
import dotenv from "dotenv";

dotenv.config();

const startServer = async () => {
  await connectDB();
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();
