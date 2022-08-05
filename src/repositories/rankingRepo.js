import connection from "../setup/database.js"

const getRanking = async () => {
    return await connection.query(`
    SELECT u.id, u.name,
    COUNT(url) AS "linksCount", 
    COALESCE(SUM(l."visitCount"), 0) AS "visitCount"
    FROM users u
    LEFT JOIN links l
    ON u.id = l."userId"
    GROUP BY u.id, l."userId"
    ORDER BY "visitCount" DESC, "linksCount" DESC 
    LIMIT 10
    `
    )
}


export {
    getRanking
}