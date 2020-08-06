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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`700`],
          },
          {
            family: `Inter`,
            variants: [`400`, `400i`, `600`, `600i`],
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Connor Dowson | Portfolio`,
    //     short_name: `Connor Dowson | Portfolio`,
    //     start_url: `/`,
    //     background_color: `#1A202C`,
    //     theme_color: `#68D391`,
    //     display: `standalone`,
    //     icon: `favicon.svg`,
    //   },
    // },
  ],
};
