import { Router } from "express";
import uploadReportsAiResponse from "../controllers/uploadReportsAiResponseController.js";
import { auth, upload } from "../middlewares/uploadMiddleware.js";

const reportsAiRouter = Router();

reportsAiRouter.post(
  "/analyzeReport",
  auth,
  upload.array("files", 5),
  uploadReportsAiResponse
);

export default reportsAiRouter;
