const db = require("../database/db");
const updateToDo = async (req, res) => {
  const request_body = req.body.todo;
  const result = await db.query(
    `UPDATE TODO_LIST SET TITLE = '${request_body.title}',DESCRIPTION = '${request_body.description}',STATUS=${request_body.status} WHERE ID = ${req.params.id}`
  );
  return result;
};

module.exports = {
  updateToDo: updateToDo,
};
