import React from "react";
import * as styles from "./TopTracks.css";

const Loader = ({ height, width, radius }) => {
  return (
    <svg className={styles.loaderStyles} height={height} width={height}>
      <circle
        id="loader"
        cx={height / 2}
        cy={width / 2}
        r={radius}
        stroke="currentColor"
        pathLength="1"
        strokeWidth="8"
        fill="none"
      />
    </svg>
  );
};

export default Loader;
