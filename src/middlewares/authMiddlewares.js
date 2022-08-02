import connection from "../setup/database.js";
import { signUpSchema, signInSchema } from "../schemas/authSchema.js";
import bycrypt from 'bcrypt';

const validationMiddleware = {
    signUp : (req,res,next) => {
        const user = req.body;
        const validation = signUpSchema.validate(user);
        if(validation.error){return res.send(validation.error).status(422)};
        next();
    },
    signIn : (req,res,next) => {
        const user = req.body;
        const validation = signInSchema.validate(user);
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
    samePassword: async (req,res,next) => {
        const {password, confirmPassword} = req.body;
        try{
            if(password !== confirmPassword){return res.send('A senha não é a mesma').status(422)};

            next();
        }catch(error){
            console.log("[Error] - samePassword Middleware")
            return res.sendStatus(500);
        };
    },
    encryptingPassword: async (req,res,next) => {
        const { password } = req.body;
        try{
            const passwordHash = bycrypt.hashSync(password, 10);
            
            res.locals.passwordHash = passwordHash;

            next();
        }catch(error){
            console.log("[Error] - encryptingPassword Middleware")
            return res.sendStatus(500);
        };
    },
    isTheUser: async (req,res,next) => {
        const { email, password } = req.body;
        try{
            const user = await connection.query(`SELECT id, password FROM users WHERE email=$1`, [email]);
            const isPasswordRight = bycrypt.compareSync(password, user.password);
            if(!user || !isPasswordRight){return res.sendStatus(401)};

            res.locals.userId = user.id
            next();
        }catch(error){
            console.log("[Error] - isPasswordRight Middleware")
            return res.sendStatus(500);
        };
    }
}

export { validationMiddleware, authMiddlewares };