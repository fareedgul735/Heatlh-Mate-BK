import express from "express";
import multer from "multer";
import { analyzeReport } from "../controllers/reportController.js";
import { verifyToken } from "../middleware/auth.js";

const uploadRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

uploadRouter.post("/upload", verifyToken, upload.single("file"), analyzeReport);

export default uploadRouter;
