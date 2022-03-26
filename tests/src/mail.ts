import { ImapFlow } from "imapflow";
import {
  EMAIL_HOST,
  EMAIL_SENDER_ADDRESS,
  EMAIL_SENDER_PASSWORD,
} from "./config";

let client: undefined | ImapFlow;

export function getMailClient(): ImapFlow {
  if (client) {
    return client;
  }

  client = new ImapFlow({
    host: EMAIL_HOST,
    port: 993,
    secure: true,
    auth: {
      pass: EMAIL_SENDER_PASSWORD,
      user: EMAIL_SENDER_ADDRESS,
    },
    logger: false,
  });

  return client;
}
