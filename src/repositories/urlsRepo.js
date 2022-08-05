import connection from "../setup/database.js"

//Post url
const newLink = async (queryParams) => await connection.query(`INSERT INTO links ("userId", "shortUrl", url, "visitCount") VALUES ($1, $2, $3, $4)`, queryParams);

//Get
const getOneLink = async (queryParams) => await connection.query(`SELECT * FROM links WHERE id=$1`, queryParams);

const increaseVisitors = async (queryParams) => await connection.query(`UPDATE links SET "visitCount" = "visitCount" + 1 WHERE id=$1`, queryParams)
export {
    newLink,
    getOneLink,
    increaseVisitors
}
