const express = require("express");
const dataWL = require("./src/data/infos.json");

const server = express();

server.get("/", (req, res) => {
  return res.json(dataWL);
});

server.get("/:id", (req, res) => {
  const id = req.params.id;

  return res.json(dataWL.filter((info) => info.settings.companyId == id)[0]);
});

server.listen(4000, () => {
  console.log(`Server onnn::::`);
});
