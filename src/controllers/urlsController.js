import { nanoid } from "nanoid";
import { newLink } from "../repositories/urlsRepo.js"

const shorten = async (req,res) => {
    const { url } = req.body;
    const shortUrl = nanoid(8);
    const queryParams = [
        shorten,
        url,
        0
    ];
    try{
        await newLink(queryParams);
        res.status(200).send({shortUrl: shortUrl});
    }catch(error){
        console.log("[Error] - signUp Controller");
        return res.sendStatus(500);
    };
}

export { shorten };