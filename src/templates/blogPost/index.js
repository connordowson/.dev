import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { CustomMDXProvider } from "../../components/MDXProvider";
import Layout from "../Layout";
import Section from "../../components/Section";
import SEO from "../../components/SEO";
import Row from "../../components/Row";
import BlogPostDate from "../../components/BlogPostLinks/BlogPostDate";
import {
  headingHashAnchor,
  pre,
} from "../../components/MDXProvider/MDXStyles.css";
import { postTitle } from "./BlogPost.css";

const BlogPost = ({ data: { mdx: post }, location }) => {
  const { frontmatter, body, excerpt, timeToRead } = post;

  useEffect(() => {
    Array.from(document.getElementsByClassName("hash-anchor")).forEach(
      (element) => {
        element.classList.add(headingHashAnchor);
      }
    );
    Array.from(
      document.getElementsByClassName("grvsc-container city-lights")
    ).forEach((element) => {
      element.classList.add(pre);
    });
  }, []);

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={`${
          frontmatter.description ? frontmatter.description : excerpt
        } | Blog | Connor Dowson`}
        keywords={frontmatter.keywords && frontmatter.keywords}
        image={`/.netlify/functions/generateMetaImage?title=${frontmatter.title}`}
      />
      <Section>
        <Row>
          <article>
            <header>
              <h1 className={postTitle}>{frontmatter.title}</h1>
              <BlogPostDate date={frontmatter.date} timeToRead={timeToRead} />
            </header>
            <CustomMDXProvider>
              <MDXRenderer>{body}</MDXRenderer>
            </CustomMDXProvider>
          </article>
        </Row>
      </Section>
    </Layout>
  );
};

export default BlogPost;

export const postQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug }, collection: { eq: "posts" } }) {
      id
      frontmatter {
        title
        slug
        description
        date(formatString: "Do MMMM, YYYY", locale: "en-GB")
        keywords
      }
      body
      excerpt
      timeToRead
    }
  }
`;
