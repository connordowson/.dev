import { createSignal, createEffect, onMount } from "solid-js";

export default () => {
  const [topTracks, setTopTracks] = createSignal(null);

  const getTopTracks = async () => {
    const response = await fetch("/api/getTopTracks");

    const { tracks } = await response.json();

    return tracks;
  };

  onMount(() => {
    setTopTracks(getTopTracks());

    getTopTracks().then((res) => {
      console.log(res);
    });
  });

  if (topTracks.length > 0) {
    return (
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 dark:border-white/10 dark:backdrop-blur-[2px]">
        {topTracks.map(({ name, artist, artwork }) => (
          <div class="dark:bg-white/5  p-2 rounded-lg flex items-center w-full gap-2 shadow-sm border dark:border-white/5 bg-white/20 border-slate-800/10">
            <img
              src={artwork}
              alt={`Album artwork for ${name}`}
              class="rounded-md self-start shrink-0"
            />

            <div class="ml-1 min-w-0">
              <span class="block font-bold font-display dark:text-slate-100 text-slate-800">
                {name}
              </span>
              <span class="text-ellipsis w-full whitespace-nowrap overflow-hidden block dark:text-slate-200 text-slate-700 font-body">
                {artist}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <p>Loading...</p>;
};
