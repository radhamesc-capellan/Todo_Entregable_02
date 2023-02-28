const express = require("express");
//const Todo = require("./models/todos.models");
const db = require("./utils/database");
const cors = require("cors");
const todoRoutes = require("./routes/todo.routes");

const app = express();
const PORT = 4500;

app.use(cors);
app.use(express.json());

db.authenticate()
  .then(() => console.log("Successful Auth"))
  .catch((error) => console.error(error));

// db.sync()
//   .then(() => console.log("Synchronized DB"))
//   .catch((error) => console.log(error));
// Todo;

app.use(todoRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "You are connect to Server",
  });
});

app.listen(PORT, () => {
  console.log(`Server running in the Port: ${PORT}`);
});
