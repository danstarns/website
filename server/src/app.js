const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const expressStaticGzip = require("express-static-gzip");
const { HTTP_PORT, STATIC_FOLDER, SITE_URL } = require("./config");
const api = require("./routers/api");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(expressStaticGzip(STATIC_FOLDER));
app.get("/subscribe", (_, r) => r.redirect(`${SITE_URL}/#subscribe`));
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
