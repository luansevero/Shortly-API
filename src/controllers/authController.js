import connection from "../setup/database.js";
import  jwt  from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const authController = {
    signUp: async (req,res) => {
        const { name, email } = req.body;
        const { passwordHash } = res.locals;
        try{
            await connection.query(`
            INSERT INTO users
            (name, email, password)
            VALUES
            ($1, $2, $3)`,
            [name, email, passwordHash]
            );

            res.sendStatus(201);
        }catch(error){
            console.log("[Error] - signUp Controller")
            return res.sendStatus(500);
        }
    },
    signIn: async (req,res) => {
        const { email } = req.body;
        try{
            const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET)
            res.send({accessToken: accessToken})
        }catch(error){
            console.log("[Error] - signIn Controller")
            return res.sendStatus(500);
        }
    }
};

export default authController;