const db = require("../database/db");

const getToDoByStatus = async (status) => {
  const results =await db.query(`SELECT * FROM TODO_LIST WHERE STATUS = ${status}`);

  return results;
};

module.exports = {
  getToDoByStatus: getToDoByStatus,
};
