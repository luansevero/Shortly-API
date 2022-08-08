import connection from "../setup/database.js";

const getUserById = async (queryParams) => await connection.query(`SELECT id, name FROM users WHERE id=$1`, queryParams)

const getAllUrlByUser = async (queryParams) => {
    return await connection.query(`
    SELECT u.id, u.name,
    SUM(l."visitCount") as "visitCount",
    (SELECT 
        ARRAY_AGG(
            jsonb_build_object(
                'id' , l.id,
                'shortUrl', l."shortUrl",
                'url', l.url,
                'visitCount', l."visitCount"
            )
            ORDER BY l.id
        )
        FROM links l
        WHERE l."userId" = u.id
    ) as "shortenedUrls"
    FROM users u
    JOIN links l
    ON u."id" = l."userId"
    WHERE u.id = $1
    GROUP BY u.id, l."userId"
    `,
    queryParams)
}

export {
    getAllUrlByUser,
    getUserById
};



