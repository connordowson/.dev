import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";

import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import theme from "../styles/theme";
import { StaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
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
            <GlobalStyles />

            <Footer footerImage={file.childImageSharp.gatsbyImageData} />
          </>
        )}
      />
    </ThemeProvider>
  );
};

export default Layout;
