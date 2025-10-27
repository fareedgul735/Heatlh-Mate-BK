import { Router } from "express";
import { upload } from "../middlewares/uploadMiddleware.js";
import {
  analyzeReport,
  getAllReports,
} from "../controllers/reportController.js";

const uploadFilesRouter = Router();

uploadFilesRouter.post("/analyze", upload.single("file"), analyzeReport);

uploadFilesRouter.get("/", getAllReports);

export default uploadFilesRouter;
