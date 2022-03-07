const express = require("express");
const cors = require("cors");
const expressStaticGzip = require("express-static-gzip");
const { HTTP_PORT, STATIC_FOLDER } = require("../config");
const api = require("./routers/api");

const app = express();
app.use(express.json());
app.use(cors());
app.use(expressStaticGzip(STATIC_FOLDER));
app.use("/api", api);
app.get("*", expressStaticGzip(STATIC_FOLDER));
app.use("*", expressStaticGzip(STATIC_FOLDER));

async function listen() {
  await app.listen(HTTP_PORT);

  console.log(`Serving files in ${STATIC_FOLDER} on port ${HTTP_PORT}`);
}

module.exports = {
  app,
  listen,
};
