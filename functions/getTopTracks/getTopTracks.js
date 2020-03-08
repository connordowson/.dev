const fetch = require("node-fetch");
const btoa = require("btoa");

const {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET
} = process.env;

const API_ENDPOINT = "https://accounts.spotify.com/api/token";

const tokens = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);

const { URLSearchParams } = require("url");

const params = new URLSearchParams();
params.append("grant_type", "client_credentials");
params.append("scope", "user-top-read");

// const body = { grant_type: "client_credentials", scope: "user-top-read" };

fetch(API_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${tokens}`
  },
  body: params
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

exports.handler = async (event, context, callback) => {
  await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${tokens}`
    },
    body: params
  })
    .then(res => res.json())
    .then(data => {
      callback(null, {
        statusCode: 200,
        body: data.access_token
      });
    })
    .catch(error => ({ statusCode: 422, body: String(error) }));
};

// exports.handler = function(event, context, callback) {
//   callback(null, {
//     statusCode: 200,
//     body: tokens
//   });
// };
