import { getBrowser, Browser, getPage } from "./puppeteer";
import { generate } from "randomstring";
import { getMailClient } from "./mail";
import { EMAIL_SENDER_ADDRESS } from "./config";
const app = require("../../server/src/app");
const nodemailer = require("../../server/src/email");

describe("e2e", () => {
  let browser: Browser;

  beforeAll(async () => {
    const mailClient = getMailClient();
    await mailClient.connect();
    await nodemailer.connect();
    await app.listen();
    browser = await getBrowser();
  });

  test("should successfully enter details in contact form and submit", async () => {
    const page = await getPage({ browser });
    const mailClient = await getMailClient();

    const selectors = {
      form: `#CONTACT_FORM_ID`,
      from: `#CONTACT_FORM_ID input[name="from"]`,
      message: `#CONTACT_FORM_ID textarea[name="message"]`,
      button: `#CONTACT_FORM_ID button`,
    };

    await page.waitForSelector(selectors.form);
    await page.waitForSelector(selectors.from);
    await page.waitForSelector(selectors.message);
    await page.waitForSelector(selectors.button);

    await page.$eval(
      `${selectors.from}`,
      (el, injected) => {
        el.value = injected;
      },
      EMAIL_SENDER_ADDRESS
    );

    const testId = generate({
      charset: "alphabetic",
    });

    const message = `automated-test: ${testId}`;

    await page.$eval(
      `${selectors.message}`,
      (el, injected) => {
        el.value = injected;
      },
      message
    );

    await page.waitForTimeout(10000);
    await page.click(selectors.button);
    await page.waitForNetworkIdle();
    await page.waitForTimeout(5000); // <- Assuming enough time for email to process

    const lock = await mailClient.getMailboxLock("INBOX");
    try {
      const emails = [];

      for await (let m of mailClient.fetch(
        { subject: "Website Contact danielstarns.com" },
        {
          envelope: true,
          uid: true,
          bodyParts: ["text"],
        }
      )) {
        if (!m?.bodyParts) {
          continue;
        }

        const text = m?.bodyParts.get("text")?.toString().trim();
        if (text === message.trim()) {
          emails.push(m);
          break;
        }
      }

      expect(emails[0]).toBeDefined();
    } finally {
      await lock.release();
    }
  });
});
