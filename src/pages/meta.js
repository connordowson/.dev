import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";

import GenerateMetaImage from "../components/GenerateMetaImage";

const meta = () => (
  <ThemeProvider theme={theme}>
    <GenerateMetaImage />
    <GlobalStyles />
  </ThemeProvider>
);

export default meta;
