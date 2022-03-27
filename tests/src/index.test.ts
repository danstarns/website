import { getBrowser, Browser, getPage } from "./puppeteer";
import { generate } from "randomstring";
import { getMailClient } from "./mail";
import { EMAIL_SENDER_ADDRESS } from "./config";
const sheets = require("../../server/src/sheets");
const app = require("../../server/src/app");
const nodemailer = require("../../server/src/email");

describe("e2e", () => {
  let browser: Browser;

  beforeAll(async () => {
    const mailClient = getMailClient();
    await mailClient.connect();
    await nodemailer.connect();
    await sheets.connect();
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

  test("should successfully enter details in subscribe form and append to google sheets", async () => {
    const page = await getPage({ browser });

    const selectors = {
      form: `#SUBSCRIBE_FORM_ID`,
      email: `#SUBSCRIBE_FORM_ID input[name="email"]`,
      button: `#SUBSCRIBE_FORM_ID button`,
    };

    await page.waitForSelector(selectors.form);
    await page.waitForSelector(selectors.email);
    await page.waitForSelector(selectors.button);

    const testStr = generate({
      charset: "alphabetic",
    });

    const email = `${testStr}@${testStr}.com`;

    await page.$eval(
      `${selectors.email}`,
      (el, injected) => {
        el.value = injected;
      },
      email
    );

    await page.click(selectors.button);
    await page.waitForNetworkIdle();

    const doc = sheets.doc;
    const sheet = doc.sheetsByTitle.subscribers;
    const rows = (await sheet.getRows()) as any[];

    const rowsToDelete = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if (row.email === email) {
        rowsToDelete.push(row);
        break;
      }
    }

    expect(rowsToDelete).toHaveLength(1);

    await rowsToDelete[0].delete();
    await sheet.saveUpdatedCells();
  });
});
