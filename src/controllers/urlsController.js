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
        console.log("[Error] - shorten Controller");
        return res.sendStatus(500);
    };
};

const getUrlById = async (req,res) => {
    const { id } = req.params
    try{
        const { rows:link } = await getOneLink('id', [id]);
        if(link.length === 0) return res.sendStatus(401);
        delete link.visitCount;
        res.status(200).send(link);
    }catch(error){
        console.log("[Error] - getUrlById Controller");
        return res.sendStatus(500);
    }
};

const openUrl = async (req,res) => {
    const { shortUrl } = req.params;
    try{
        const { rows:link } = await getOneLink('shortUlr', [shortUrl]);
        if(link.length === 0) return res.sendStatus(404);
        await increseVisitors([shortUrl]);

        res.redirect(link.url);
    }catch(error){
        console.log("[Error] - getUrlById Controller");
        return res.sendStatus(500);
    };
}

export { shorten, getUrlById };