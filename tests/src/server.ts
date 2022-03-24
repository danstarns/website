const app = require("../../server/src/app");
const email = require("../../server/src/email");

let server: any = undefined;

export async function startServer() {
  await email.connect();

  server = await app.listen();
}

export async function stopServer() {
  await server.close();
}
