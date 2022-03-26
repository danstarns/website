import { startServer, stopServer } from "./src/server";
import { getMailClient } from "./src/mail";

beforeAll(async () => {
  const mailClient = getMailClient();
  await mailClient.connect();
  await startServer();
});

afterAll(async () => {
  const mailClient = getMailClient();
  await mailClient.close();
  await mailClient.logout();
  await stopServer();
});
