import React from "react";
import styled from "styled-components";

const BlogPostDateStyles = styled.div`
  color: ${(props) => props.theme.colors.grey[3]};
  font-weight: 300;
  p {
    display: inline-block;
  }

  span {
    margin: 0 0.5em;
  }
`;

const BlogPostDate = ({ date, timeToRead }) => (
  <BlogPostDateStyles>
    <p>{date}</p>
    <span>•</span>
    <p>{timeToRead} minute read</p>
  </BlogPostDateStyles>
);

export default BlogPostDate;
