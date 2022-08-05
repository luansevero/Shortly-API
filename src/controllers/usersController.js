import { getAllUrlByUser } from "../repositories/usersRepo.js";

const getAll = async (req,res) => {
    const  userId  = parseInt(res.locals.userId);
    
    try{
        const {rows:user} = await getAllUrlByUser([userId]);
        res.send(user)
    }catch(error){
        console.log("[Error] - getAll Controller");
        return res.sendStatus(500);
    }
}

export default getAll