import connection from "../setup/database.js";
import { v4 as uuid } from "uuid";

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
        const { customerId } = res.locals;
        try{
            const token = uuid();
            await connection.query(`
            INSERT INTO sessions
            ("userId", token)
            VALUES
            ($1, $2)`,
            [customerId, token]
            );

            res.sendStatus(201);
        }catch(error){
            console.log("[Error] - signIn Controller")
            return res.sendStatus(500);
        }
    }
};

export default authController;