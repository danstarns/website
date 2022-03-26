import { getBrowser, Browser, getPage } from "./puppeteer";
import { generate } from "randomstring";
import { EMAIL_SENDER_ADDRESS } from "./config";
import { getMailClient } from "./mail";

describe("contact", () => {
  let browser: Browser;

  beforeAll(async () => {
    browser = await getBrowser();
  });

  afterAll(async () => {
    await browser.close();
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
    await page.waitForTimeout(2000); // <- Assuming enough time for email to process

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
        emails.push(m);
      }

      const [email] = emails.filter((email) => {
        if (!email?.bodyParts) {
          return false;
        }

        const text = email?.bodyParts.get("text")?.toString().trim();

        return text === message.trim();
      });

      expect(email).toBeDefined();
    } finally {
      await lock.release();
    }
  });
});
