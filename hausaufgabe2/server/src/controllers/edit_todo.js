const Router = require("express");
const url = require("url");
const editTodo = Router();

editTodo.put("/", async (req, res, next) => {
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
    // IMPORTANT : send variables in JSON format from the Frontend!
    const { name, deadline, fortschritt, id } = req.body;
    console.log(`Editing existing todo with id = ${id}`);
    const query = `UPDATE todos SET name = ?, deadline = ?, fortschritt = ? WHERE id = ?`;
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
