import React, { useState, useEffect } from "react";
import * as styles from "./GenerateMetaImage.css";

const noOfDots = new Array(25).fill("");

const GenerateMetaImage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    params.get("title") && setTitle(params.get("title"));
    params.get("image") && setImage(params.get("image"));
  }, []);

  const [title, setTitle] = useState();
  const [image, setImage] = useState();

  return (
    <div className={styles.metaImageWrapper}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{title}</h1>
        {image && (
          <img id="meta-image" src={image} className={styles.image} alt="" />
        )}
      </div>
      <div className={styles.nameWrapper}>
        <img src="./connordowson.webp" alt="" className={styles.profileImage} />
        <p className={styles.siteURL}>connordowson.dev</p>
      </div>
      <div className={styles.dotGrid}>
        {noOfDots.map(() => {
          return <div className={styles.dot} />;
        })}
      </div>
    </div>
  );
};

export default GenerateMetaImage;
