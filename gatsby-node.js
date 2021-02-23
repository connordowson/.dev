const fs = require("fs");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// query for blog posts
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Graphql query to get blog post data

  const blogPostResult = await graphql(`
    query {
      allMdx(filter: { fields: { collection: { eq: "posts" } } }) {
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

  blogPostResult.data.allMdx.edges.forEach((edge) => {
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

    // This is where we add our own custom fields to each node
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
