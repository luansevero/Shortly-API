import { nanoid } from "nanoid";
import { newLink, increaseVisitors, haveShorten, getOneLinkById, openShortUrl, deleteUserLink } from "../repositories/urlsRepo.js"

const shorten = async (req,res) => {
    const { url } = req.body;
    const { userId } = res.locals;
    const shortUrl = nanoid(8);
    const queryParams = [
        userId,
        url
    ];

    try{
        const { rows: userLink } = await haveShorten(queryParams);
        if(userLink.length !== 0) return res.status(422).send({
            url : `User already have this url shortned`
        })

        queryParams.splice(1,0, shortUrl);
        queryParams.push(0);

        await newLink(queryParams);

        res.status(200).send({shortUrl: shortUrl});
    }catch(error){
        console.log("[Error] - shorten Controller");
        return res.sendStatus(500);
    };
};

const getUrlById = async (req,res) => {
    const id  = parseInt(req.params.id);
    if(isNaN(id)) return res.sendStatus(404);
    try{
        const { rows:link } = await getOneLinkById([id]);
        if(link.length === 0) return res.sendStatus(404);
        delete link[0].visitCount;
        delete link[0].userId;
        res.status(200).send(link[0]);
    }catch(error){
        console.log("[Error] - getUrlById Controller");
        return res.sendStatus(500);
    }
};

const openUrl = async (req,res) => {
    const { shortUrl } = req.params;
    if(shortUrl === undefined) return res.sendStatus(400);

    try{
        const { rows:link } = await openShortUrl([shortUrl])
        if(link.length === 0) return res.sendStatus(404);
        await increaseVisitors([link[0].id]);
        res.redirect(link[0].url)
    }catch(error){
        console.log("[Error] - openUrl Controller");
        return res.sendStatus(500);
    };
}

const deleteLink = async (req,res) => {
    const id  = parseInt(req.params.id);
    if(isNaN(id)) return res.sendStatus(404);
    const { userId } = res.locals;

    try{
        const { rows:link } = await getOneLinkById([id]);

        if(link.length === 0) return res.sendStatus(404);
        if(link[0].userId !== userId) return res.sendStatus(401);

        await deleteUserLink(link[0].id);

        res.sendStatus(204);
    }catch(error){
        console.log("[Error] - getUrlById Controller");
        return res.sendStatus(500);
    }
};

export { shorten, getUrlById, openUrl, deleteLink};