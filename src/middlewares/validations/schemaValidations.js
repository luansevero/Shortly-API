import { signInSchema, signUpSchema } from "../../schemas/authSchema.js";

const schemas = {
    signup : signUpSchema,
    signin : signInSchema
}

const validationMiddleware = (route) => {
    return (req,res,next) => {
        const body =  req.body;
        console.log(route)
        const validation =  schemas[route].validate(body);
        if(validation.error){return res.status(422).send(validation.error)};
        next();
    }
};

export default validationMiddleware;
