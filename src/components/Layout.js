import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";

import theme from "../styles/theme";

import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

Layout.propTypes = {};

export default Layout;
