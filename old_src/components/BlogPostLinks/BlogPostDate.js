import React from "react";
import * as styles from "./BlogPostLinks.css";

const BlogPostDate = ({ date, timeToRead }) => (
  <div className={styles.blogPostDateContainer}>
    <p className={styles.blogPostDateP}>{date}</p>
    <span className={styles.blogPostDateDot}>•</span>
    <p className={styles.blogPostDateP}>{timeToRead} minute read</p>
  </div>
);

export default BlogPostDate;
