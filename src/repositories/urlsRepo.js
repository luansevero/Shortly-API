import connection from "../setup/database.js"

//Post url
const newLink = async (queryParams) => await connection.query(`INSERT INTO links (shortUrl, url, visitCount) VALUE ($1, $2, $3)`, queryParams);


export {
    newLink
}