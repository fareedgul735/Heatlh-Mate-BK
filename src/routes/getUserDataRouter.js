import { Router } from "express";
import getUserData from "../controllers/getUserDataController.js";

const getUserDataRouter = Router();

getUserDataRouter.get("/userInfo", getUserData);

export default getUserDataRouter;
