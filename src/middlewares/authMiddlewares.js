import connection from "../setup/database.js";
import { signUpSchema, signInSchema } from "../schemas/authSchema.js";

const validationMiddleware = {
    signUp : (req,res,next) => {
        const customer = req.body;
        const validation = signUpSchema.validate(customer);
        if(validation.error){return res.send(validation.error).status(422)};
        next();
    },
    signIn : (req,res,next) => {
        const costumer = req.body;
        const validation = signInSchema.validate(costumer);
        if(validation.error){return res.send(validation.error).status(422)};
        next();
    }
};

const authMiddlewares = {
    haveCustomer: async (req,res,next) => {
        const { email } = req.body;
        try{
            const haveCustomer = await connection.query(`SELECT * FROM users WHERE email=$1`, [email]);

            if(haveCustomer){return res.sendStatus(409)};

            next();
        }catch(error){
            console.log("[Error] - haveCustomer Middleware")
            return res.sendStatus(500);
        };
    },

}

export { validationMiddleware };