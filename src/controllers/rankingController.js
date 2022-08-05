import { getRanking } from "../repositories/rankingRepo.js";

const top10Ranking = async (req,res) => {
    // try{
        const { rows:ranking } = await getRanking()
        res.status(200).send(ranking);
    // }catch(error){
        // console.log("[Error] - top10Ranking Controller");
        // return res.sendStatus(500);
    // }
}

export default top10Ranking;