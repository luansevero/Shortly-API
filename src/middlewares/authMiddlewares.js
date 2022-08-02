import connection from "../setup/database.js";
import { signUpSchema, signInSchema } from "../schemas/authSchema.js";

const validationMiddleware = {
    signUp : (req,res,next) => {
        const costumer = req.body;
        const validation = signUpSchema.validate(costumer);
        if(validation.error){return res.send(validation.error).status(422)};
        next();
    },
    signIn : (req,res,next) => {
        const costumer = req.body;
        const validation = signInSchema.validate(costumer);
        if(validation.error){return res.send(validation.error).status(422)};
        next();
    }
}

export { validationMiddleware };