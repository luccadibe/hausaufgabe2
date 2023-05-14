const Router = require("express");

const editTodo = Router();

editTodo.post("/editTodo", async (req, res, next) => {
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
    const { name, deadline, fortschritt, id } = req.body;
    const query = `UPDATE todo SET name = ?, deadline = ?, progress = ? WHERE id = ?`;
    const values = [name, deadline, fortschritt, id];

    // Insert the new todo into the database
    const [result] = await pool.execute(query, values);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the todo." });
  }
});

module.exports = editTodo;
