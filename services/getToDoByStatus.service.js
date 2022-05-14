const getToDoByStatus = require("../controllers/getToDoByStatus.controller");

const getToDoByStatusService = async (req, res) => {
  const reqStatus = req.body.status;
  const status = ["upcoming", "current", "completed"];
  if (status.indexOf(reqStatus) > 0) {
    const results = await getToDoByStatus.getToDoByStatus(
      status.indexOf(reqStatus) >= 0 && status.indexOf(reqStatus)
    );

    if (results.length > 0) {
      res.json(results);
    } else {
      res.json({
        status: 400,
        message: `There is no todo list exist under the status ${reqStatus} `,
      });
    }
  } else {
    res.json({ status: 400, message: "Please enter the valid status" });
  }
};
module.exports = {
  getToDoByStatusService: getToDoByStatusService,
};
