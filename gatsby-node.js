const fs = require("fs");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// query for blog posts
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Graphql query to get blog post data
  // Two queries, one to build draft posts in development
  // and one to only build published posts in production

  const blogPostResult = await graphql(`
    query {
      production: allMdx(
        filter: {
          fields: { collection: { eq: "posts" } }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      development: allMdx(
        filter: { fields: { collection: { eq: "posts" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // get the current environment
  // will return 'development' in 'gatsby develop'
  // and 'production' in 'gatsby build' or 'gatsby serve'
  const environment = process.env.NODE_ENV;

  blogPostResult.data[environment].edges.forEach((edge) => {
    const path = `/blog/${edge.node.fields.slug}`;
    console.log(path);
    console.log(edge.node.fields.slug);

    createPage({
      path,
      component: require.resolve("./src/templates/blogPost.js"),
      context: { slug: edge.node.fields.slug },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    // if my posts have a slug in the frontmatter, it means I've specified what I want it to be. Otherwise I want to create one automatically

    const generatedSlug = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug ? `${node.frontmatter.slug}` : generatedSlug,
    });

    // Add it to a collection
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
    console.log(getNode(node.parent).sourceInstanceName);
  }
};
