import { Router } from "express";

import top10Ranking from "../controllers/rankingController.js";

const rankinRouter = Router();

rankinRouter.get("/ranking", top10Ranking);

export default rankinRouter;