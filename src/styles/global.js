import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  scroll-behavior: smooth;

}

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  &::selection, ::-moz-selection {
  color: ${(props) => props.theme.colors.grey[0]};
  background: ${(props) => props.theme.colors[props.theme.accent][4]};
  }
}

p{
  line-height: 1.7;
  font-family: ${(props) => props.theme.typography.body};
}

h1,h2,h3,h4,h5,h6{
  font-family: ${(props) => props.theme.typography.headings};
}

body{
  background: ${(props) => props.theme.colors.grey[8]};
  color: ${(props) => props.theme.colors.grey[0]};
  font-family: ${(props) => props.theme.typography.body};
  
  background-attachment: fixed;
}`;

export default GlobalStyles;
