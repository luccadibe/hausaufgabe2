const Router = require("express");

const getTable = Router();




//super important: apparently we need to include the mysql import and the pool inside
//the function. otherwise it doesnt work idk why
getTable.get("/", async (req, res,next) => {

    const mysql = require("mysql2")
    const pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DATABASE
    }).promise()

    try {
        const [rows] = await pool.query("SELECT * FROM todos")
        return res.status(200).send(rows);
    }
    catch(error){
        console.log("database error when getting table")
        next(error);
    }
})

module.exports = getTable;