require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    defaultTitle: "Connor Dowson | Portfolio",
    defaultAuthor: "Connor Dowson",
    defaultDescription:
      "Portfolio site for Bristol based front end web developer, Connor Dowson.",
    defaultImage: "/meta_image.png",
    siteURL: "https://connordowson.dev",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: "projects",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-embedder`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "City Lights",
              extensions: [`city-lights-theme`],
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1500,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/fonts/*": [
            "Cache-Control: public",
            "Cache-Control: max-age=365000000",
            "Cache-Control: immutable",
          ],
        },
      },
    },
  ],
};
