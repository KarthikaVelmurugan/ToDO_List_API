const db = require("../database/db");

const getToDo = async (req, res) => {
  const result = await db.query(
    `SELECT * FROM TODO_LIST WHERE ID = ${req.params.id}`
  );
  return result;
};
module.exports = {
  getToDo: getToDo,
};
