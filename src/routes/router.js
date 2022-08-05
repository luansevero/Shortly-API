import { Router } from "express";
import authRouter from "./authRouters.js";
import urlRouter from "./urlsRouters.js";
import userRouter from "./usersRouters.js";
import rankinRouter from "./rankingRouters.js";

const router = Router();

router.use(authRouter);
router.use(urlRouter);
router.use(userRouter);
router.use(rankinRouter);

export default router;