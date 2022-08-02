import { Router } from "express";
import { validationMiddleware } from "../middlewares/authMiddlewares.js";

const authRouter = Router();

authRouter.post("/signup", validationMiddleware.signUp);
authRouter.post("/signin", validationMiddleware.signIn);

export default authRouter;