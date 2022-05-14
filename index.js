const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Testing nodeserver running

app.get("/test", (req, res) => {
  res.send("Server is running....");
});

app.use(router);

app.listen(3001, () => {
  console.log("Server started in the port 3001");
});
