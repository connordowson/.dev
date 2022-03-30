import React, { useState, useEffect } from "react";
import Loader from "./Loader";

import * as styles from "./TopTracks.css";

const getTopTracks = async () => {
  const response = await fetch("./.netlify/functions/getTopTracks");
  const { tracks } = await response.json();

  return tracks;
};

const TopTracks = () => {
  const [topTracks, setTopTracks] = useState();

  useEffect(() => {
    getTopTracks().then((data) => setTopTracks(data));
  }, []);

  return (
    <>
      {topTracks ? (
        <div className={styles.songGrid}>
          {topTracks.map((song, index) => {
            return (
              <div className={styles.songCard} key={index}>
                <img
                  className={styles.songAlbumArt}
                  src={song.artwork}
                  alt={`Album artwork for ${song.name}.`}
                  loading="lazy"
                />
                <div className={styles.songInfo}>
                  <span className={styles.songTitle}>{song.name}</span>
                  <span className={styles.songArtist}>{song.artist}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.loaderContainer}>
          <Loader
            className={styles.loader}
            height="70"
            width="70"
            radius="30"
          />
          <p className={styles.loaderText}>Loading...</p>
        </div>
      )}
    </>
  );
};

export default TopTracks;
