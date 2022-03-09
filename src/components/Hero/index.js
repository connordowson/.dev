import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./Hero.css";

const Hero = ({ heroImage }) => {
  const noOfDots = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <p className={styles.heroText}>
          Hi! I'm <span className={styles.heroTextAccent}>Connor Dowson</span>,
          a front end web developer based in Bristol.
        </p>
        <div className={styles.heroImageContainer}>
          <GatsbyImage
            className={styles.heroImage}
            image={heroImage}
            alt="Connor Dowson"
          />
          <div className={styles.dotGrid}>
            {noOfDots.map(() => {
              return <div className={styles.dot} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
