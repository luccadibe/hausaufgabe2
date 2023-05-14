const Router = require("express");

const newTodo = Router();

newTodo.post("/", async (req, res, next) => {
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
    // get variables out of request
    const { name, deadline, fortschritt } = req.body;
    // Insert the new todo into the database
    const [result] = await pool.execute(
      "INSERT INTO todos (name, deadline, fortschritt) VALUES (?, ?, ?)",
      [name, deadline, fortschritt]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while adding the todo." });
  }
});

module.exports = newTodo;
