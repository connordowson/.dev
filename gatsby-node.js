const fs = require("fs");
const path = require("path");

// query for blog posts
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Graphql query to get blog post data
  const blogPostResult = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `);

  blogPostResult.data.allContentfulBlogPost.edges.forEach(edge => {
    const path = `/blog/${edge.node.slug}`;
    console.log(path);

    createPage({
      path,
      component: require.resolve("./src/templates/blogPost.js"),
      context: { id: edge.node.id }
    });
  });
};
