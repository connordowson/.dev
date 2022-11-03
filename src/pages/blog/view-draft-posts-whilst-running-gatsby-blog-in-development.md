---
title: "View draft posts whilst running your Gatsby blog in development"
slug: "view-draft-posts-whilst-running-gatsby-blog-in-development"
description: "Two ways to add support to be able to view your draft Gatsby blog posts in development, without them being published."
keywords: "gatsby, gatsbyjs, blog, jamstack, markdown, mdx"
date: "2021-03-02"
---

Whilst I've been adding an MDX blog to my Gatsby portfolio site, I've been looking for a way to view blog posts whilst I'm still working on them in development - but I don't want them to be visible in production. I found two ways to do this, which both utilise `process.env.NODE_ENV` in order to figure out which context Gatsby is being run in.

- `gatsby develop` returns "develop".
- `gatsby build` and `gatsby serve` return "production".

The two ways are as follows:

1. Add a field in the frontmatter to specify draft posts, and run 2 graphql queries.
2. Use `gatsby-source-filesystem`'s ignore option to ignore draft posts during build time.

## Using two queries to seperate drafts and published posts

First add add a field to the frontmatter of your markdown (or MDX) posts.

```md {5}
---
title: "My post"
slug: "first-post"
date: "2021-03-01"
published: false
---
```

Then in `gatsby-node.js` create 2 queries, one for production and one for development. The 'production' query filters posts based on the frontmatter field we added earlier, whilst the 'development' query retrieves all of our posts, ignoring the `published` field. From here we use `process.env.NODE_ENV` to see which context Gatsby is running in, and then only create pages for the desired posts. Make sure to also use this query anywhere else in you will be displaying blog posts, e.g. a blog landing page. Because of this I wasn't quite happy with this method as it could lead to discrepancies around the site.

```js:gatsby-node.js
// query for blog posts
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPosts = await graphql`
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
  `;

  const environment = process.env.NODE_ENV;

  blogPosts.data[environment].edges.forEach((edge) => {
    const path = `/blog/${edge.node.fields.slug}`;
    createPage({
      path,
      component: require.resolve("./src/templates/blogPost.js"),
      context: { slug: edge.node.fields.slug },
    });
  });
};
```

### Links

- [Thanks to Pantaley Stoyanov who wrote about this here](https://pantaley.com/blog/Implementing-draft-status-for-your-blog-posts-in-GatsbyJS/)
- [Gatsby docs on environment variables](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/#server-side-nodejs)

## Using gatsby-source-filesystem's ignore option

The second method I found is to use the 'ignore' option of `gatsby-source-filesystem` to ignore certain folders, or files with a prefix in their filename. A benefit to this method, is that it will stop drafts from showing up everywhere on your site, as you are filtering the posts at the source. For example, if you have a blog landing page which lists all your blog posts, this will ensure no drafts show up there when your site is live, without you having to edit the graphql query there. These reasons are why I prefered this method and ultimately used this on my site.

```js:gatsby-config.js
{
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/src/posts`,
    name: "posts",
    // To ignore any files in the "/posts/drafts" folder
    ignore: process.env.NODE_ENV === `production` ? [`**/posts/drafts`] : [],
    // To ignore any files with the "draft-" prefix
    ignore: process.env.NODE_ENV === `production` ? [`**/draft-*`] : [],
  },
},
```

Once your post is ready to go live, just move the post out of the 'drafts' folder or remove the 'draft-' prefix depending on which method you chose.

### Links

- [janosh on GitHub](https://github.com/gatsbyjs/gatsby/issues/25#issuecomment-475893504)
- [gatsby-source-filesystem docs](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/#options)
