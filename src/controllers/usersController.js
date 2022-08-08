import { getAllUrlByUser, getUserById } from "../repositories/usersRepo.js";

const getAll = async (req,res) => {
    const  userId  = parseInt(res.locals.userId);

    try{
        const {rows: user} = await getUserById([userId])
        if(user.length === 0){return res.sendStatus(404)};

        const {rows:userUrls} = await getAllUrlByUser([userId]);

        if(userUrls.length === 0){
            return res.status(200).send({
                ...user[0],
                visitCount: 0,
                shortenedUrls: []
            })
        }
        res.status(200).send(userUrls)
    }catch(error){
        console.log("[Error] - getAll Controller");
        return res.sendStatus(500);
    }
}

export default getAll