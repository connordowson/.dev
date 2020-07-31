import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, keywords, url, image, author, article }) => {
  const { site } = useStaticQuery(metaQuery);

  const {
    defaultTitle,
    defaultAuthor,
    defaultDescription,
    siteURL,
    defaultImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteURL}${image || defaultImage}`,
    url: url || siteURL,
    author: author || defaultAuthor,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="theme-color" content="#1A202C" />
    </Helmet>
  );
};

export default SEO;

const metaQuery = graphql`
  query DefaultSeoQuery {
    site {
      siteMetadata {
        defaultTitle
        defaultAuthor
        defaultDescription
        siteURL
        defaultImage
      }
    }
  }
`;
