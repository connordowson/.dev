import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import Layout from "./Layout";
import Section from "../components/Section";
import SEO from "../components/SEO";
import Row from "../components/Row";
import BlogPostDate from "../components/BlogPostDate";

import { slugify } from "../helpers";

const PostStyles = styled.article`
  @media ${(props) => props.theme.breakpoints[0]} {
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints[2]} {
    width: 46em;
  }

  p,
  pre,
  blockquote,
  table,
  img,
  ul,
  ol,
  details,
  dl,
  hr {
    margin-bottom: 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border-bottom: 1px solid ${(props) => props.theme.colors.grey[7]};
    margin-bottom: 1em;
    padding: 0.75em 0;

    :hover > .hash-anchor {
      opacity: 1;
    }
  }

  header h1 {
    padding-top: 0;
    color: ${(props) => props.theme.colors[props.theme.accent][4]};
  }

  ul,
  ol {
    list-style-position: inside;
    li {
      margin: 0 1em;
    }
  }

  .hash-anchor {
    fill: ${(props) => props.theme.colors[props.theme.accent][2]};
    position: absolute;
    left: -28px;
    opacity: 0;
    transition: opacity 100ms ease-in-out;
  }

  pre {
    border: 1px solid ${(props) => props.theme.colors.grey[7]};
    border-radius: 0.5em;

    :before {
      content: attr(data-language);
      font-family: inherit;
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0.5em;
      background: ${(props) => props.theme.colors[props.theme.accent][2]};
      color: ${(props) => props.theme.colors[props.theme.accent][8]};
      padding: 0.25em 0.5em;
      border-radius: 0 0 0.5em 0.5em;
      font-size: 0.9rem;
    }
  }

  .gatsby-code-header {
    display: inline-block;
    background: ${(props) => props.theme.colors[props.theme.accent][2]};
    color: ${(props) => props.theme.colors[props.theme.accent][8]};
    padding: 0.5em 0.75em;
    border-radius: 0.5em 0.5em 0 0;
    h5 {
      font-family: "Fira Code";
      font-weight: 400;
      margin: 0;
      font-size: 0.9rem;
      border-bottom: none;
      padding: 0;
    }

    ~ pre {
      border-radius: 0 0.5em 0.5em 0.5em;
    }
  }

  pre,
  code {
    font-family: "Fira Code";
  }

  code:not(pre code) {
    padding: 0.2em;
    border: 1px solid ${(props) => props.theme.colors.grey[7]};
    border-radius: 0.5em;
    font-size: 0.9em;
    display: inline-block;
  }

  hr {
    background-color: ${(props) => props.theme.colors.grey[7]};
    height: 2px;
    border: 0;
    padding: 0;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
  }

  blockquote {
    padding: 0 1em;
    border-left: 0.25em solid ${(props) => props.theme.colors.grey[6]};
  }

  table {
    display: block;
    width: 100%;
    width: max-content;
    max-width: 100%;
    overflow: auto;
    border-spacing: 0;
    border-collapse: collapse;

    tr {
      border-top: 1px solid ${(props) => props.theme.colors.grey[6]};
      :nth-child(2n) {
        background: ${(props) => props.theme.colors.grey[7]};
      }
    }

    td,
    th {
      padding: 6px 13px;
      border: 1px solid ${(props) => props.theme.colors.grey[6]};
    }
  }
`;

const BlogPost = ({ data: { mdx: post }, location }) => {
  const { frontmatter, body, excerpt, timeToRead } = post;

  useEffect(() => {
    console.log(location.origin);
    fetch(
      `../.netlify/functions/generateMetaImage?title=${slugify(
        frontmatter.title
      )}&image=https://digital.ai/sites/default/files/pictures/styles/maxwidth_1920/public/blog-images//puppeteer.jpg`
    ).then((res) => {
      console.log(res.url);
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
        image={`${location.origin}/.netlify/functions/generateMetaImage?title=${frontmatter.title}&image=https://digital.ai/sites/default/files/pictures/styles/maxwidth_1920/public/blog-images//puppeteer.jpg`}
      />
      <Section>
        <Row>
          <PostStyles>
            <img
              src={`${location.origin}/.netlify/functions/generateMetaImage?title=${frontmatter.title}&image=https://digital.ai/sites/default/files/pictures/styles/maxwidth_1920/public/blog-images//puppeteer.jpg`}
            />
            <header>
              <h1>{frontmatter.title}</h1>
              <BlogPostDate date={frontmatter.date} timeToRead={timeToRead} />
            </header>
            <MDXRenderer>{body}</MDXRenderer>
          </PostStyles>
        </Row>
      </Section>
    </Layout>
  );
};

export default BlogPost;

export const postQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
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
