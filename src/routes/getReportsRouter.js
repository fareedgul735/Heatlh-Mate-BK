import { Router } from "express";
import getReportsInfo from "../controllers/getReportsWithAiController.js";
import { auth } from "../middlewares/uploadMiddleware.js";

const getReports = Router();

getReports.get("/reports",auth,getReportsInfo)

export default getReports;
