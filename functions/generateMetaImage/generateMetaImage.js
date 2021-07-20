// const fetch = require("node-fetch");
const chromium = require("chrome-aws-lambda");
const cloudinary = require("cloudinary").v2;
const fetch = require("isomorphic-unfetch");

const local = process.env.NODE_ENV === "development";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudFolder = "connordowson-meta-images";

const objectToParams = (object) => {
  const params = new URLSearchParams();
  Object.entries(object).map((entry) => {
    let [key, value] = entry;
    params.set(key, value);
  });
  return params.toString();
};

const getImage = async (imageName) => {
  const url = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD}/image/upload/${cloudFolder}/${imageName}.png`;

  return await fetch(url).then((res) => {
    if (res.status !== 404) {
      return url;
    } else {
      return null;
    }
  });
};

const takeScreenshot = async (url) => {
  const browser = await chromium.puppeteer.launch({
    executablePath: local
      ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
      : await chromium.executablePath,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.setViewport({ height: 900, width: 1600 });
  await page.goto(url, { waitUntil: "load" });
  await page.waitForSelector("#meta-image");
  const buffer = await page.screenshot();
  await browser.close();
  return `data:image/png;base64,${buffer.toString("base64")}`;
};

const uploadImage = async (title, image) => {
  const cloudinaryOptions = {
    public_id: `${cloudFolder}/${title}`,
    unique_filename: false,
  };
  console.log(`uploading ${title} to cloudinary`);
  return await cloudinary.uploader
    .upload(image, cloudinaryOptions)
    .then((response) => response.url);
};

const forwardResponse = async (imageUrl) => {
  return {
    statusCode: 308, // Permanent Redirect
    headers: {
      location: cloudinary.url(imageUrl, { sign_url: true }),
    },
    body: "",
  };
};

exports.handler = async function(event) {
  if (!event.queryStringParameters) {
    console.log(`no params given`);
    return;
  }

  const title = event.queryStringParameters.title;
  console.log(`processing ${title}...`);

  const existingImage = await getImage(title);

  if (existingImage) {
    console.log(`yay, ${title} already existed`);
    return forwardResponse(existingImage);
  }

  console.log(`generating image for ${title}`);
  const url = local
    ? `http://${event.headers.host}`
    : `https://${event.headers.host}`;
  const imageParams = objectToParams(event.queryStringParameters);
  console.log(imageParams);
  const screenshot = await takeScreenshot(`${url}/meta?${imageParams}`);
  const newImage = await uploadImage(title, screenshot);
  console.log(`done with ${title}`);
  return forwardResponse(newImage);
};
