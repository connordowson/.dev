const { builder } = require("@netlify/functions");
const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer-core");

const captureWidth = 1200;
const captureHeight = 630;

async function handler(event, context) {
  const isLocal = event.headers.host.includes("localhost");

  let path = event.path.replace("/meta-image.jpg", "");

  const urlSearchParams = new URLSearchParams(event.rawQuery);

  const { title, description } = Object.fromEntries(urlSearchParams);

  const url = `${isLocal ? "http" : "https"}://${
    event.headers.host
  }/meta-image-generator?title=${title || "No title!"}&description=${
    description || "No description!"
  }`;
  // const url = `${isLocal ? "http" : "https"}://${
  //   event.headers.host
  // }\meta-image-generator`;

  const browser = await puppeteer.launch({
    executablePath: process.env.URL.includes("localhost")
      ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
      : await chromium.executablePath,
    args: [...chromium.args, "--disable-web-security"],
    defaultViewport: {
      width: captureWidth,
      height: captureHeight,
    },
    headless: chromium.headless,
  });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "domcontentloaded" });

  // Wait until all images and fonts have loaded
  await page.evaluate(async () => {
    const selectors = Array.from(document.querySelectorAll("img"));
    await Promise.all([
      document.fonts.ready,
      ...selectors.map((img) => {
        // Image has already finished loading, let’s see if it worked
        if (img.complete) {
          // Image loaded and has presence
          if (img.naturalHeight !== 0) return;
          // Image failed, so it has no height
          throw new Error("Image failed to load");
        }
        // Image hasn’t loaded yet, added an event listener to know when it does
        return new Promise((resolve, reject) => {
          img.addEventListener("load", resolve);
          img.addEventListener("error", reject);
        });
      }),
    ]);
  });

  const screenshot = await page.screenshot({
    type: "jpeg",
    // netlify functions can only return strings, so base64 it is
    encoding: "base64",
    quality: 100,
    clip: {
      x: 0,
      y: 0,
      width: captureWidth,
      height: captureHeight,
    },
  });

  await browser.close();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "image/jpg",
    },
    body: screenshot,
    isBase64Encoded: true,
  };
}

exports.handler = builder(handler);
