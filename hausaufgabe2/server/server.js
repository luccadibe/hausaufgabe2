const express = require("express");
const table = require("./src/controllers/table");
const newTodo = require("./src/controllers/new_todo");
const dotenv = require("dotenv").config();
const app = express();
const mysql = require("mysql2");
const port = process.env.PORT;
const cors = require("cors");

app.use("/", table);
app.use("/newtodo", newTodo);
app.use(cors())

app.listen(port, () => {
  console.log(`Server  running on port ${port}`);
});

//ALL RELATED TO THE DATABASE
