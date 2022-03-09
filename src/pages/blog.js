import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../templates/Layout";

import SEO from "../components/SEO";
import Section from "../components/Section";
import Row from "../components/Row";
import BlogPostLinks from "../components/BlogPostLinks";

const AccentHeading = styled.h1`
  color: ${(props) => props.theme.colors[props.theme.accent][4]};
`;

const Blog = ({ data }) => {
  const blogDescription =
    "Random posts, mostly about web dev 👨‍💻, music 🎶, and anything else that I find interesting.";

  return (
    <Layout>
      <SEO title="Blog | Connor Dowson" description={blogDescription} />
      <Section>
        <Row>
          <div>
            <AccentHeading>Blog</AccentHeading>
            <p>{blogDescription}</p>
            <BlogPostLinks blogPosts={data.allMdx.edges} landingPage />
          </div>
        </Row>
      </Section>
    </Layout>
  );
};

export default Blog;

export const blogPostResult = graphql`
  query {
    allMdx(
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "Do MMMM, YYYY", locale: "en-GB")
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
