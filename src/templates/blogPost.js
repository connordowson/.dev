import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import Layout from "./Layout";
import Section from "../components/Section";
import Row from "../components/Row";

const PostStyles = styled.article`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: 16px;
  }
  pre,
  blockquote,
  table,
  ul,
  ol,
  details,
  dl,
  hr {
    margin-bottom: 16px;
  }

  ul,
  ol {
    list-style-position: inside;
    li {
      margin: 0 1em;
    }
  }
  pre code {
    font-family: "Fira Code";
  }

  a {
    :link {
      color: ${(props) => props.theme.colors[props.theme.accent][4]};
    }
    :hover {
      color: ${(props) => props.theme.colors[props.theme.accent][6]};
    }
    :visited {
      color: ${(props) => props.theme.colors[props.theme.accent][7]};
    }
  }

  hr {
    background-color: ${(props) => props.theme.colors.grey[7]};
    height: 2px;
    border: 0;
    padding: 0;
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

const blogPost = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <Helmet>
        {/* <title>{title} | Connor Dowson</title> */}
        <meta charSet="utf-8" />
      </Helmet>

      <Section>
        <Row>
          <PostStyles>
            <h1>{post.frontmatter.title}</h1>
            <a href="/">click me</a>
            <MDXRenderer>{post.body}</MDXRenderer>
          </PostStyles>
        </Row>
      </Section>
    </Layout>
  );
};

export default blogPost;

export const postQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        slug
      }
      body
    }
  }
`;
