import connection from "../setup/database.js"

//Post url
const newLink = async (queryParams) => await connection.query(`INSERT INTO links (shortUrl, url, visitCount) VALUE ($1, $2, $3)`, queryParams);

//Get
const getOneLink = async (value, queryParams) => await connection.query(`SELECT * FROM links WHERE ${value}=$1`, queryParams);

const increaseVisitors = async (queryParams) => await connection.query(`UPDATE links SET visitCount = visitCount + 1 WHERE id=$1`, queryParams)
export {
    newLink,
    getOneLink,
    increaseVisitors
}