import { Router } from "express";

import authenticateToken from "../middlewares/validations/authenticateTokenValidation.js";
import validationMiddleware from "../middlewares/validations/schemaValidations.js";
import { shorten, getUrlById } from "../controllers/urlsController.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten",authenticateToken, validationMiddleware("url"), shorten);
urlRouter.get("/urls/:id", getUrlById);
urlRouter.delete("/urls/:id", )
urlRouter.get("/urls/open/:shortUrl", );

export default urlRouter;