import { createResource, Switch, Match } from "solid-js";

const getTopTracks = async () =>
  await fetch("/api/getTopTracks").then((res) => res.json());

export default () => {
  const [topTracks] = createResource(getTopTracks);

  return (
    <div class="grid song-card-grid">
      <Switch fallback={<p>Not found</p>}>
        <Match
          when={
            topTracks.state === "pending" || topTracks.state === "unresolved"
          }
        >
          <p>Loading...</p>
        </Match>

        <Match when={topTracks.state === "ready"}>
          {topTracks().map(({ name, artist, artwork }) => (
            <div class="card song-card shadow-sm">
              <img src={artwork} alt={`Album artwork for ${name}`} />

              <div class="song-card-info">
                <span class="song-card-title">{name}</span>
                <span class="song-card-artist">{artist}</span>
              </div>
            </div>
          ))}
        </Match>
        <Match when={topTracks.state === "errored"}>
          {JSON.stringify(topTracks.error)}
        </Match>
      </Switch>
    </div>
  );
};
