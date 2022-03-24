import { startServer, stopServer } from "./src/server";

beforeAll(async () => {
  await startServer();
});

afterAll(async () => {
  await stopServer();
});
