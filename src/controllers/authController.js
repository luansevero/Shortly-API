import connection from "../setup/database.js";

import  jwt  from "jsonwebtoken";
import dotenv from 'dotenv';

import { newUser } from "../repositories/authRepo.js"

dotenv.config();

const authController = {
    signUp: async (req,res) => {
        const queryParams = Object.values({
            name: req.body.name,
            email: req.body.email,
            passwordHash: res.locals.passwordHash
        });
        try{
            newUser(queryParams);

            res.sendStatus(201);
        }catch(error){
            console.log("[Error] - signUp Controller")
            return res.sendStatus(500);
        }
    },
    signIn: async (req,res) => {
        const { email } = req.body;
        try{
            const accessToken = jwt.sign({email:email}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3d'});
            const refreshToken = jwt.sign({email:email}, process.env.REFRESH_TOKEN_SECRET)
            res.send({accessToken: accessToken, refreshToken: refreshToken})
        }catch(error){
            console.log("[Error] - signIn Controller")
            return res.sendStatus(500);
        }
    }
};

export default authController;