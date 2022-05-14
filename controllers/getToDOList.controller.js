const db = require("../database/db");

const getToDoList = async (req, res) => {
  const results = await db.query("SELECT * FROM TODO_LIST");
  return results;
};

module.exports = {
  getToDoList: getToDoList,
};
