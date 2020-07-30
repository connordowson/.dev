import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";

import SEO from "../components/SEO";
import theme from "../styles/theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Layout;
