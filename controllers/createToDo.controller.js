const db = require("../database/db");
const createToDo = async (req, res) => {
  const request_body = req.body.todo;
  console.log(request_body,"request")
  const result = await db.query(
    `INSERT INTO TODO_LIST(CREATED_DATE,LASTMODIFIED_DATE,TITLE,DESCRIPTION,STATUS) VALUES (NOW(),NOW(),'${request_body.title}','${request_body.description}',${request_body.status})`
  );
  return result;
};

module.exports = {
  createToDo: createToDo,
};
