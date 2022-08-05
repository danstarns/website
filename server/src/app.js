const express = require("express");
const cors = require("cors");
const expressStaticGzip = require("express-static-gzip");
const config = require("./config");
const api = require("./routers/api");

const app = express();
app.use(express.json());
app.use(cors());
app.use(expressStaticGzip(config.STATIC_FOLDER));

app.use("/api", api);
app.get("*", expressStaticGzip(config.STATIC_FOLDER));
app.use("*", expressStaticGzip(config.STATIC_FOLDER));

async function listen() {
  const server = await app.listen(config.HTTP_PORT);

  console.log(
    `Serving files in ${config.STATIC_FOLDER} on port ${config.HTTP_PORT}`
  );

  return server;
}

module.exports = {
  app,
  listen,
};
