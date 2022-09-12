const fetch = require("isomorphic-unfetch");

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const TOP_TRACKS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=6";
const spotify_secrets = Buffer.from(`${client_id}:${client_secret}`).toString(
  "base64"
);

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${spotify_secrets}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token }),
  });

  return response.json();
};

const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  console.log(access_token);

  return await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

exports.handler = async () => {
  try {
    const response = await getTopTracks();

    const { items } = await response.json();

    // console.log(response);

    const tracks = items.map((track) => ({
      name: track.name,
      artist: track.artists.map((artist) => artist.name).join(", "),
      artwork: track.album.images[2].url,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ tracks }),
    };
  } catch (error) {
    return {
      statusCode: 422,
      body: JSON.stringify(error.message),
    };
  }
};
