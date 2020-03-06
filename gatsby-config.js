require("dotenv").config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    title: "Connor Dowson | Portfolio",
    author: "Connor Dowson",
    description:
      "Portfolio site for Bristol based front end web developer, Connor Dowson.",
    siteURL: "https://connordowson.dev"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
};
