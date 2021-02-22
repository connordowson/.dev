import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";

import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import theme from "../styles/theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <Navbar />
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Layout;
