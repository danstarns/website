import puppeteer, { Browser } from "puppeteer";
import { HTTP_PORT } from "./config";

let browser: puppeteer.Browser | null;

export async function getPage(options: {
  browser: puppeteer.Browser;
}): Promise<puppeteer.Page> {
  const page = await options.browser.newPage();

  await page.goto(`http://localhost:${HTTP_PORT}`);

  await page.waitForNetworkIdle();

  return page;
}

export async function getBrowser() {
  if (browser) {
    return browser;
  }

  browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--disable-web-security"],
  });

  return browser;
}

export { Browser };
