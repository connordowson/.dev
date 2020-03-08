import fetch from "node-fetch";
require("dotenv").config({
  path: `.env`
});

const API_ENDPOINT = "";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_SPACE_ID}`
    }
  })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data.joke
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
