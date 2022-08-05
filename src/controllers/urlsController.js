import { nanoid } from "nanoid";
import connection from "../setup/database.js";

const shorten = async (req,res) => {
    const { url } = req.body;
    const shortUrl = nanoid(8);
    const queryParams = [
        shorten,
        url,
        0
    ];
    try{
        await connection.query(`INSERT INTO links (shortUrl, url, visitCount) VALUE ($1, $2, $3)`, [shorten, url, 0])
        res.status(200).send({shortUrl: shortUrl})
    }catch(error){
        console.log("[Error] - signUp Controller")
        return res.sendStatus(500);
    }
    
}

export { shorten };