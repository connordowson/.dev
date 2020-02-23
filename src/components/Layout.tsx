import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/global";

import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <GlobalStyles />
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
