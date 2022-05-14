const getToDoList = require("../controllers/getToDOList.controller");

const getToDoListService = async (req, res) => {
  const results = await getToDoList.getToDoList(req, res);
  res.json(results);
};

module.exports = {
  getToDoListService: getToDoListService,
};
