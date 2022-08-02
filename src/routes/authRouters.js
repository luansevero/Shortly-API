import { Router } from "express";
import { validationMiddleware, authMiddlewares } from "../middlewares/authMiddlewares.js";
import authController from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", validationMiddleware.signUp, authMiddlewares.haveCustomer, authMiddlewares.samePassword, authMiddlewares.encryptingPassword, authController.signUp);
authRouter.post("/signin", validationMiddleware.signIn, authMiddlewares.isTheUser, authController.signIn);

export default authRouter;