const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var jsonParser = bodyParser.json();
var cors = require("cors");
var bit0 = 0;
var bit1 = 0;
var bit2 = 0;

app.use(cors());

app.post("/", jsonParser, function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  bit0 = req.body.liga;
  bit1 = req.body.desliga;
  bit2 = req.body.restart;
  console.log(bit0, bit1, bit2)
  res.end();
});
  

app.get("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  res.write(
    JSON.stringify({
      liga: bit0,
      desliga: bit1,
      restart: bit2
    })
  );
  res.end();
});

app.listen(3000);