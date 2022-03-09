import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
:root{
  scroll-behavior: smooth;
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-display: block;
  font-weight: 700;
  src: url('/fonts/poppins-700-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  font-display: block;
  src: url('/fonts/inter-var-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Fira Code';
  font-style: normal;
  font-display: swap;
  font-weight: 300 700;
  src: url('/fonts/fira-code-var-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  &::selection, ::-moz-selection {
  color: ${(props) => props.theme.colors.grey[0]};
  background: ${(props) => props.theme.colors[props.theme.accent][4]};
  }
}

p, ul, ol{
  line-height: 1.7;
  font-family: ${(props) => props.theme.typography.body};
}


h3 > a, h2 > a{
    text-decoration: none;
}

/* a:not([data-button="true"]) {
  transition: color 100ms ease-in-out; 

  :link {
    color: ${(props) => props.theme.colors[props.theme.accent][2]};
  }

  :hover {
    color: ${(props) => props.theme.colors[props.theme.accent][4]};
  }

  :visited{
    color: ${(props) => props.theme.colors[props.theme.accent][2]};
    :hover{
      color: ${(props) => props.theme.colors[props.theme.accent][4]};

    }
  }

} */

h1,h2,h3,h4,h5,h6{
  font-family: ${(props) => props.theme.typography.headings};
}

body{
  /* background: ${(props) => props.theme.colors.grey[8]}; */
  color: ${(props) => props.theme.colors.grey[0]};
  font-family: ${(props) => props.theme.typography.body};
  overflow: hidden;
}

pre code{
  font-family: "Fira Code"
}
`;

export default GlobalStyles;
