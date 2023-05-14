const Router = require("express");

const deleteTodo = Router();

deleteTodo.delete("/", async (req, res) => {
  // TEST
  console.log("test deleting id");
  // TEST
  const { id } = req.body;

  const mysql = require("mysql2");
  const pool = mysql
    .createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    })
    .promise();
  // Delete the todo from the database
  const query = `DELETE FROM todos WHERE id = ?`;
  try {
    //something is causing the server to hang at this stage, idk what
    const [result] = await pool.execute(query, [id]);
    if (result.affectedRows === 0) {
      console.log("Todo not found");
      res.status(404).send("Todo not found");
    } else {
      console.log("Todo deleted successfully");
      res.status(200).send("Todo deleted successfully");
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the todo." });
  }
});
module.exports = deleteTodo;
