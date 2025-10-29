import { Router } from "express";
import uploadReportsAiResponse from "../controllers/uploadReportsAiResponseController.js";

const reportsAiRouter = Router();

reportsAiRouter.post("/analyzeReport", uploadReportsAiResponse);

export default reportsAiRouter;
