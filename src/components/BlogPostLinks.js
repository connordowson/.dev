import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import BlogPostDate from "../components/BlogPostDate";

const PostsGrid = styled.div`
  display: grid;
  gap: 1em;

  > div > div {
    color: ${(props) => props.theme.colors.grey[3]};
    font-weight: 300;
    p {
      display: inline-block;
    }

    span {
      margin: 0 0.5em;
    }
  }
`;

const BlogPostLinks = ({ blogPosts, landingPage }) => {
  return (
    <PostsGrid>
      {blogPosts.map(function({ node: post }) {
        return (
          <div>
            <p>
              {landingPage ? (
                <h2>
                  <Link to={`/blog/${post.fields.slug}`}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
              ) : (
                <h3>
                  <Link to={`/blog/${post.fields.slug}`}>
                    {post.frontmatter.title}
                  </Link>
                </h3>
              )}
            </p>
            <BlogPostDate
              date={post.frontmatter.date}
              timeToRead={post.timeToRead}
            />
            <p>
              {post.frontmatter.description
                ? post.frontmatter.description
                : post.excerpt}
            </p>
          </div>
        );
      })}
    </PostsGrid>
  );
};

export default BlogPostLinks;
