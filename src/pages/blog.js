import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/Layout";

import SEO from "../components/SEO";
import Spacer from "../components/Spacer";
import Section from "../components/Section";
import Row from "../components/Row";
import BlogPostLinks from "../components/BlogPostLinks";

const Blog = ({ data }) => {

  const blogDescription = "Random posts, mostly about web dev 👨‍💻, music 🎶 and anything else that I find interesting."

  return (
    <Layout>
      <SEO
        description={blogDescription}
      />
      <Section>
        <Row>
          <Spacer vertical="1em">
            <h1>Blog</h1>
            <p>{blogDescription}</p>
            <BlogPostLinks blogPosts={data.allMdx.edges} landingPage />
          </Spacer>
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
            frontmatter{
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
