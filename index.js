const express = require("express");
const dataWL = require("./src/data/infos.json");

const server = express();

server.get("/", (req, res) => {
  return res.json(dataWL);
});

server.get("/:id", (req, res) => {
  const id = req.params.id;
  const project = dataWL.filter((info) => info.companyId == id)[0];

  if (!project) {
    return res.json({ error: "Objeto não encontrado" });
  }

  return res.json(project);
});

server.listen(4000, () => {
  console.log(`Server onnn::::`);
});
