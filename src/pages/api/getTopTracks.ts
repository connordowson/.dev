import type { APIRoute } from "astro";

const {
	SPOTIFY_CLIENT_ID: client_id,
	SPOTIFY_CLIENT_SECRET: client_secret,
	SPOTIFY_REFRESH_TOKEN: refresh_token,
} = import.meta.env;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const TOP_TRACKS_ENDPOINT =
	"https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=6";
const spotify_secrets = Buffer.from(`${client_id}:${client_secret}`).toString(
	"base64",
);

const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${spotify_secrets}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token,
		}),
	});

	if (!response.ok) {
		const error = await response.text();
		throw new Error(`Token request failed: ${response.status} ${error}`);
	}

	return response.json();
};

const getTopTracks = async () => {
	const { access_token } = await getAccessToken();
	const response = await fetch(TOP_TRACKS_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	if (!response.ok) {
		const error = await response.text();
		throw new Error(`Top tracks request failed: ${response.status} ${error}`);
	}

	return response;
};

export const GET: APIRoute = async () => {
	try {
		const response = await getTopTracks();
		const { items } = await response.json();

		const tracks = items.map((track) => ({
			name: track.name,
			artist: track.artists.map((artist) => artist.name).join(", "),
			artwork: track.album.images[2].url,
		}));

		return new Response(JSON.stringify(tracks), {
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error("Error fetching tracks:", error);
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
};
