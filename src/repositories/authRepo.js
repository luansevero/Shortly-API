import connection from "../setup/database.js"

//SignUp Route
const newUser = async (queryParams) => await connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, queryParams);

//SignIn Route
const findUser = async (query, queryParams) => await connection.query(query, queryParams);
const signin = async (query, queryParams) => await connection.query(query, queryParams);

export {
    newUser,
    findUser,
}