import connection from "../setup/database.js";
import bycrypt from 'bcrypt';

const isNewUser = async (req, res, next) => {
    const { email } = req.body;
    try {
        const { rows: user } = await connectionquery(`SELECT * FROM users WHERE email=$1`, [email]);
        if (user.length !== 0) { return res.sendStatus(409) };
        next();
    } catch (error) {
        console.log("[Error] - haveCostumer Middleware");
        return res.sendStatus(500);
    };
};

const isTheSamePassword = async (req, res, next) => {
    const { password, confirmPassword } = req.body;
    try {
        if (password !== confirmPassword) { return res.status(422).send('Senhas diferentes') };
        next();
    } catch (error) {
        console.log("[Error] - samePassword Middleware")
        return res.sendStatus(500);
    };
};

const encryptingPassword = async (req, res, next) => {
    const { password } = req.body;
    try {
        const passwordHash = bycrypt.hashSync(password, 10);

        res.locals.passwordHash = passwordHash;

        next();
    } catch (error) {
        console.log("[Error] - encryptingPassword Middleware")
        return res.sendStatus(500);
    };
};

const isTheUser = async (req, res, next) => {
    const { email, password } = req.body;
        const { rows:user } = await connection.query(`SELECT password FROM users WHERE email= $1`, [email]);
        console.log(user[0].password)
        const isPasswordRight = bycrypt.compareSync(password, user[0].password);
        if (!user[0] || !isPasswordRight) { return res.sendStatus(401) };

        next();
    // } catch (error) {
    //     console.log("[Error] - isTheUser Middleware")
    //     return res.sendStatus(500);
    // };
};

export { isNewUser, isTheSamePassword, encryptingPassword, isTheUser };