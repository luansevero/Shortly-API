import { Router } from "express";
import validationMiddleware from "../middlewares/validations/schemaValidations.js";
import { isNewUser, isTheSamePassword, encryptingPassword, isTheUser } from "../middlewares/authMiddlewares.js"
import authController from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", validationMiddleware('signup'), isNewUser, isTheSamePassword, encryptingPassword, authController.signUp);
authRouter.post("/signin", validationMiddleware('signin'), isTheUser, authController.signIn);

export default authRouter;