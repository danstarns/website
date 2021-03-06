const express = require("express");
const cors = require("cors");
const expressStaticGzip = require("express-static-gzip");
const fs = require("fs");
const path = require("path");
const config = require("./config");
const api = require("./routers/api");

const app = express();
app.use(express.json());
app.use(cors());
app.use(expressStaticGzip(config.STATIC_FOLDER));

app.get("/subscribe", (_, r) => r.redirect(`${config.CLIENT_URL}/#subscribe`));
app.get("/unsubscribe", async (_, r) =>
  r
    .type(".html")
    .send(
      (
        await fs.promises.readFile(
          path.join(__dirname, "./forms/unsubscribe.html")
        )
      )
        .toString()
        .replace("${SERVER_URL}", config.SERVER_URL)
        .replace("${CLIENT_URL}", config.CLIENT_URL)
    )
);

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
