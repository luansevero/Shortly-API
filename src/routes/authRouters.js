import { Router } from "express";
import validationMiddleware from "../middlewares/validations/schemaValidations.js";
import authMiddlewares from "../middlewares/authMiddlewares.js"
import authController from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", validationMiddleware('signup'));
authRouter.post("/signin", authMiddlewares.isTheUser, authController.signIn);

export default authRouter;