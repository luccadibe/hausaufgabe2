const express = require("express");
//components
const table = require("./src/controllers/table");
const newTodo = require("./src/controllers/new_todo");
const editTodo = require("./src/controllers/edit_todo");
const deleteTodo = require("./src/controllers/delete_todo");

const dotenv = require("dotenv").config();
const app = express();
const mysql = require("mysql2");
const port = process.env.PORT;
const cors = require("cors");
//middleware
app.use(cors());
app.use(express.json());
//routes


//// not sure but it is maybe needed to put id like app.use("/edittodo/:id", editTodo);
//// same with deletetodo
//// or maybe in the edit_todo.js 
app.use("/", table);
app.use("/newtodo", newTodo);
app.use("/edittodo", editTodo);
app.use("/deletetodo", deleteTodo);

app.listen(port, () => {
  console.log(`Server  running on port ${port}`);
});

//ALL RELATED TO THE DATABASE
