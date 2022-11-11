import { useState, useEffect } from "preact/hooks";

const ListeningTo = () => {
  const getTopTracks = async () => {
    const response = await fetch("./.netlify/functions/getTopTracks");
    const { tracks } = await response.json();

    return tracks;
  };

  const [topTracks, setTopTracks] = useState();

  useEffect(() => {
    getTopTracks().then((data) => setTopTracks(data));
  }, []);

  if (!topTracks) return <p>Loading</p>;

  return (
    <section class="mx-auto my-12 p-4 lg:px-4 max-w-[1200px]">
      <h2 class="dark:text-emerald-400 mb-4 text-emerald-500">
        What I've been listening to
      </h2>
      <p class="mb-4 dark:text-slate-100 text-slate-900">
        My top played songs from the Spotify API (so I can't hide any
        embarrassing ones).
      </p>
      <div class="grid grid-cols-3 gap-4">
        {topTracks.map(({ name, artist, artwork }) => (
          <div class="dark:bg-slate-700 bg-white p-2 rounded-lg flex items-center w-full gap-2 shadow-md dark:highlight-white/5">
            <img
              src={artwork}
              alt={`Album artwork for ${name}`}
              class="rounded-md self-start shrink-0"
            />

            <div class="ml-1 min-w-0">
              <span class="block font-bold font-display dark:text-slate-100 text-slate-800">
                {name}
              </span>
              <span class="text-ellipsis w-full whitespace-nowrap overflow-hidden block dark:text-slate-200 text-slate-700">
                {artist}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListeningTo;
