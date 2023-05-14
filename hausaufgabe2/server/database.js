const mysql = require("mysql2")
const dotenv = require("dotenv").config();
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}).promise()

async function getTable() {
    const [rows] = await pool.query("SELECT * FROM todos")
    return rows
}
const tabelle = getTable()
console.log(tabelle)

async function addTodo(name, deadline, fortschritt) {
    await pool.query(`INSERT INTO todos (name,deadline,fortschritt)
    VALUES (?,?,?) `, [name, deadline,fortschritt])
}

database.post('/', async (req, res) => {
    try {
      const { name, deadline, fortschritt } = req.body;

      // Insert the new todo into the database
      const [result] = await pool.execute(
        'INSERT INTO todos (name, deadline, fortschritt) VALUES (?, ?, ?)',
        [name, deadline, fortschritt]
      );
      res.status(201).json({ id: result.insertId });
      }
      catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while adding the todo.' });
      }
    });
    