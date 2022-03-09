//  https://github.com/gatsbyjs/gatsby/blob/master/examples/using-vanilla-extract/src/components/ColorModeToggle.tsx
import { globalStyle, globalFontFace } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";
const { colors, fonts } = vars;

globalFontFace("Poppins", {
  src: `url("/fonts/poppins-700-latin.woff2") format('woff2')`,
  fontWeight: `700`,
  fontDisplay: "block",
  fontStyle: "normal",
  unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
  U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
  U+FEFF, U+FFFD`,
});
globalFontFace("Inter", {
  src: `url("/fonts/inter-var-latin.woff2") format('woff2')`,
  fontWeight: `100 900`,
  fontDisplay: "block",
  fontStyle: "normal",
  unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
  U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
  U+FEFF, U+FFFD`,
});
globalFontFace("Fira Code", {
  src: `url("/fonts/fira-code-var-latin.woff2") format('woff2')`,
  fontWeight: `300 700`,
  fontDisplay: "block",
  fontStyle: "normal",
  unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
  U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
  U+FEFF, U+FFFD`,
});

globalStyle("*", {
  boxSizing: `border-box`,
});

globalStyle("html", {
  fontFamily: "Inter",
  color: colors.slate50,
  backgroundColor: colors.slate800,
  lineHeight: "1.5",
});

globalStyle(":root", {
  scrollBehavior: "smooth",
});

globalStyle(`___gatsby`, {
  isolation: `isolate`,
});

globalStyle("p, ul, ol", {
  lineHeight: "1.7",
});

globalStyle("p", {
  marginBottom: "1rem",
});

globalStyle("pre, code", {
  fontFamily: "Fira Code",
});

globalStyle("code:not(pre code)", {
  fontFamily: "Fira Code",
  padding: "0.2em 0.5em",
  borderRadius: "0.5em",
  fontSize: "0.9em",
  display: "inline-block",
  border: `1px solid ${colors.slate700}`,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: "0 0 1rem 0",
  fontFamily: fonts.headings,
});

globalStyle("h1", {
  fontSize: "2.011rem",
});

globalStyle("h2", {
  fontSize: "1.749rem",
});

globalStyle("h3", {
  fontSize: "1.521rem",
});

globalStyle("h4", {
  fontSize: "1.322rem",
});

globalStyle("h5", {
  fontSize: "1.15rem",
});

globalStyle("h6", {
  fontSize: "1rem",
});

globalStyle(".gatsby-code-header h5", {
  display: "inline-block",
  backgroundColor: colors.emerald200,
  color: colors.emerald800,
  padding: "0.5em 0.75em",
  borderRadius: "0.5em 0.5em 0 0",
  border: "none",
  margin: "0",
  fontFamily: "Fira Code",
  fontWeight: "400",
});

globalStyle(`a:not([data-button="true"])`, {
  textDecoration: "none",
});

globalStyle(`a:not([data-button="true"])`, {
  transition: "color 100ms ease-in-out",
  color: colors.emerald200,
});

globalStyle(`a:not([data-button="true"]):hover`, {
  color: colors.emerald400,
});
