import { Router } from "express";
import authRouter from "./authRouters";
import urlRouter from "./urlsRouters";
import userRouter from "./usersRouters";
import rankinRouter from "./rankingRouters";

const router = Router();

router.use(authRouter);
router.use(urlRouter);
router.use(userRouter);
router.use(rankinRouter);

export default router;