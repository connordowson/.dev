import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";

import GenerateMetaImage from "../components/GenerateMetaImage";
const generateMetaImage = async () => {
  await fetch(
    "./.netlify/functions/generateMetaImage?title=Swanksy new dynamic meta images 55&image=https://digital.ai/sites/default/files/pictures/styles/maxwidth_1920/public/blog-images//puppeteer.jpg"
  );
};

const Meta = () => {
  // useEffect(() => {
  //   generateMetaImage();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <GenerateMetaImage />
      <GlobalStyles />
      <button onClick={() => generateMetaImage()}>click me</button>
    </ThemeProvider>
  );
};

export default Meta;
