import { Router } from "express";
import authenticateToken from "../middlewares/validations/authenticateTokenValidation.js";
import getAll from "../controllers/usersController.js";

const userRouter = Router();

userRouter.get("/users/me",authenticateToken, getAll);

export default userRouter;