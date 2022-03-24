const app = require("../../server/src/app");

let server: any = undefined;

export async function startServer() {
  server = await app.listen();
}

export async function stopServer() {
  await server.close();
}
