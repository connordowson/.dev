const fetch = require("node-fetch");
const btoa = require("btoa");
const { URLSearchParams } = require("url");

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN
} = process.env;

const API_ENDPOINT = "https://accounts.spotify.com/api/token";

const spotify_secrets = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);

const params = new URLSearchParams();
params.append("grant_type", "refresh_token");
params.append("refresh_token", SPOTIFY_REFRESH_TOKEN);
params.append("scope", "user-top-read");

const getTopTracks = async () => {
  return await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${spotify_secrets}`
    },
    body: params
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return fetch(
        "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=6",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${data.access_token}`
          }
        }
      );
    })
    .then(res => res.json())
    .then(data => {
      return JSON.stringify(data.items);
    });
};

exports.handler = async () => {
  try {
    const topTracks = await getTopTracks();

    return {
      statusCode: 200,
      body: topTracks
    };
  } catch (error) {
    return {
      statusCode: 422,
      body: JSON.stringify(error.message)
    };
  }
};
