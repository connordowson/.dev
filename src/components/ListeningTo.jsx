import { useState, useEffect } from "preact/hooks";
import styles from "@styles/ListeningTo.module.scss";

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
    <section>
      <h2 className="section--heading">What I've been listening to</h2>
      <p>
        My top played songs from the Spotify API (so I can't hide any
        embarrassing ones).
      </p>
      <div className={styles.songGrid}>
        {topTracks.map(({ name, artist, artwork }) => (
          <div className={styles.songCard}>
            <img src={artwork} alt={`Album artwork for ${name}`} />

            <div className={styles.songInfo}>
              <span>{name}</span>
              <span>{artist}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListeningTo;
