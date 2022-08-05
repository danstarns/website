const app = require("./app");
const email = require("./email");

async function main() {
  await email.connect();

  await app.listen();

  console.log("Server Online");
}

main();
