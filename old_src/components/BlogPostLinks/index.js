import React from "react";
import { Link } from "gatsby";

import * as styles from "./BlogPostLinks.css";

import BlogPostDate from "./BlogPostDate";

const BlogPostLinks = ({ blogPosts, landingPage }) => {
  return (
    <div className={styles.blogPostsGrid}>
      {blogPosts.map(function({ node: post }) {
        return (
          <div className={styles.blogPostLinkContainer}>
            {landingPage ? (
              <h2>
                <Link
                  className={styles.blogPostLink}
                  to={`/blog/${post.fields.slug}`}
                >
                  {post.frontmatter.title}
                </Link>
              </h2>
            ) : (
              <h3>
                <Link
                  className={styles.blogPostLink}
                  to={`/blog/${post.fields.slug}`}
                >
                  {post.frontmatter.title}
                </Link>
              </h3>
            )}
            <BlogPostDate
              date={post.frontmatter.date}
              timeToRead={post.timeToRead}
            />
            {post.frontmatter.description
              ? post.frontmatter.description
              : post.excerpt}
          </div>
        );
      })}
    </div>
  );
};

export default BlogPostLinks;
