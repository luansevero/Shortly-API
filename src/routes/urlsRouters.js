import { Router } from "express";
import validationMiddleware from "../middlewares/validations/schemaValidations.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", validationMiddleware("url"));
urlRouter.get("/urls/:id", );
urlRouter.delete("/urls/:id", )
urlRouter.get("/urls/open/:shortUrl", );

export default urlRouter;