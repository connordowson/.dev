const axios = require("axios");
const btoa = require("btoa");

const {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET
} = process.env;

const API_ENDPOINT = "https://accounts.spotify.com/api/token";

const tokens = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);

// exports.handler = function(event, context, callback) {
//   callback(null, {
//     statusCode: 200,
//     body: tokens
//   });
// };

const body = { grant_type: "client_credentials" };

exports.handler = async (event, context, callback) => {
  await axios({
    method: "post",
    url: API_ENDPOINT,
    data: JSON.stringify(body),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${tokens}`
    }
  })
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: res.data.access_token
      });
    })
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
