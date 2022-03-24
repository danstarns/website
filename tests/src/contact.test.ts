import { CONTACT_FORM_ID } from "./config";
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

    await page.waitForSelector(`#${CONTACT_FORM_ID}`);
  });
});
