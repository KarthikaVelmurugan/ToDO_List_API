const updateToDo = require("../controllers/updateToDo.controller");
const updateToDoService = async (req, res) => {
  const result = await updateToDo.updateToDo(req, res);
  if (result.affectedRows > 0) {
    res.json({ status: 200, message: "updated successfully!" });
  } else {
    res.json({
      status: 400,
      message: "Error occured during updating the todo list",
    });
  }
};

module.exports = {
  updateToDoService: updateToDoService,
};
