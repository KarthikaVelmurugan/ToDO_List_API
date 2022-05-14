const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const getToDoListService = require("./services/getToDoList.service");
const getToDoService = require("./services/getToDo.service");
const createToDoService = require("./services/createToDo.service");
const updateToDoService = require("./services/updateToDo.service");
const deleteToDoService = require("./services/deleteToDo.service");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Testing nodeserver running

app.get("/test", (req, res) => {
  res.send("Server is running....");
});

//Get all Todo List records

app.get("/", getToDoListService.getToDoListService);

// Get particular Todo List

app.get("/:id", getToDoService.getToDoService);

// create the new todo

app.post("/", createToDoService.createToDoService);

//update the todo list

app.put("/:id", updateToDoService.updateToDoService);

// delete the todo list

app.delete("/:id",deleteToDoService.deleteToDoService);

app.listen(3001, () => {
  console.log("Server started in the port 3001");
});
