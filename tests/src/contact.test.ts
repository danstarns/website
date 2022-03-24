import { getBrowser, Browser, getPage } from "./puppeteer";

describe("contact", () => {
  let browser: Browser;

  beforeAll(async () => {
    browser = await getBrowser();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("should successfully contact", async () => {
    const page = await getPage({ browser });

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
      "test_email@email.com"
    );

    await page.$eval(
      `${selectors.message}`,
      (el, injected) => {
        el.value = injected;
      },
      "This is a automated test email you can ignore"
    );

    await page.click(selectors.button);

    await page.waitForNetworkIdle();
  });
});
