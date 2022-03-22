const app = require("./app");
const email = require("./email");
const sheets = require("./sheets");

async function main() {
  await sheets.connect();

  await email.connect();

  await app.listen();

  console.log("Server Online");
}

main();
