import connection from "../setup/database.js"

//SignUp Route
const newUser = async (queryParams) => await connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, queryParams);

//Shared AuthRoute
const findUser = async (queryParams) => await connection.query(`SELECT * FROM users WHERE email= $1`, queryParams);
const signin = async (query, queryParams) => await connection.query(query, queryParams);

export {
    newUser,
    findUser,
}