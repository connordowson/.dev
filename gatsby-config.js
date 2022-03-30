require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    defaultTitle: "Portfolio | Connor Dowson",
    defaultAuthor: "Connor Dowson",
    defaultDescription:
      "Portfolio site for Bristol based front end web developer, Connor Dowson.",
    defaultImage: "/meta_image.png",
    siteURL: "https://connordowson.dev",
    navLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blog",
        link: "/blog",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-vanilla-extract`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 90,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
        ignore: process.env.NODE_ENV === `production` ? [`**/draft-*`] : [],
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: "assets",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-embedder`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-code-headers`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "City Lights",
              extensions: [`city-lights-theme`],
              inlineCode: {
                marker: "•",
              },
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
    {
      resolve: `gatsby-plugin-panelbear`,
      options: {
        siteID: "JdXgyMSn7Mo",
      },
    },
  ],
};
