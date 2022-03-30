import React from "react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <StaticQuery
        query={graphql`
          query siteNavLinksQuery {
            site {
              siteMetadata {
                navLinks {
                  link
                  name
                }
              }
            }
            file(name: { eq: "connordowson" }) {
              childImageSharp {
                gatsbyImageData(
                  height: 112
                  width: 112
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
        `}
        render={({ site, file }) => (
          <>
            <Navbar links={site.siteMetadata.navLinks} />
            {children}
            <Footer footerImage={file.childImageSharp.gatsbyImageData} />
          </>
        )}
      />
    </>
  );
};

export default Layout;
