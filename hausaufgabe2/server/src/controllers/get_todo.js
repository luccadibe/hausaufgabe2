const Router = require("express");
const getTodo = Router();
//something is wrong with this :id !!
getTodo.get("/:id", async (req, res, next) => {
  console.log("TESTING");
  const todoId = req.params.id;
  const mysql = require("mysql2");
  const pool = mysql
    .createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    })
    .promise();
  try {
    const rows = await pool.query("SELECT * FROM todos WHERE id= ?", [todoId]);
    return res.status(200).send(rows);
  } catch (error) {
    console.error("Error retrieving todo:", err);
    res.status(500).send("Error retrieving todo");
    next(error);
  }
});

module.exports = getTodo;
