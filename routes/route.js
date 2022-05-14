const express = require("express");
const createToDoService = require("../services/createToDo.service");
const deleteToDoService = require("../services/deleteToDo.service");
const getToDoService = require("../services/getToDo.service");
const getToDoListService = require("../services/getToDoList.service");
const updateToDoService = require("../services/updateToDo.service");
const router = express.Router();

//Get all Todo List records

router.route("/").get(getToDoListService.getToDoListService);
// Get particular Todo List
router.route("/:id").get(getToDoService.getToDoService);

// create the new todo
router.route("/").post(createToDoService.createToDoService);

//update the todo list

router.route("/:id").put(updateToDoService.updateToDoService);

// delete the todo list

router.route("/:id").delete(deleteToDoService.deleteToDoService);

module.exports = router;
