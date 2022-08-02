import connection from "../setup/database.js";

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
            console.log("[Error] - authController Controller")
            return res.sendStatus(500);
        }
    }
}