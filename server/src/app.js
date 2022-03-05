const express = require("express");
const cors = require("cors");
const { HTTP_PORT, STATIC_FOLDER, CLIENTS_PATH } = require("./config");
const api = require("./routers/api");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(STATIC_FOLDER));
app.use("/clients", express.static(CLIENTS_PATH));
app.use("/api", api);
app.get("*", express.static(STATIC_FOLDER));

async function listen() {
  await app.listen(HTTP_PORT);

  console.log(`Serving files in ${STATIC_FOLDER} on port ${HTTP_PORT}`);
}

module.exports = {
  app,
  listen,
};
