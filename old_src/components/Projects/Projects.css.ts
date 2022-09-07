import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
import { button } from "../Button/Button.css";
const { colors } = vars;

export const projectGrid = style({
  display: "grid",
  gridGap: "2em",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  alignItems: "start",
  "@media": {
    "screen and (min-width: 1024px)": {
      gridTemplateColumns: "5fr 3fr",
    },
  },
});

export const projectDetails = style({
  padding: "1.5em",
  display: "flex",
  flexDirection: "column",
  // gap: "1.5em",
});

export const buttonsWrapper = style({
  backgroundColor: colors.slate600,
  borderRadius: "0 0 1rem 1rem",
  padding: "1.5rem",
  boxShadow: `${colors.slate700} 0px -1px 0px 0px inset`,
});

export const projectLinkButton = style([
  button,
  {
    width: "calc(50% - 0.75rem)",
    display: "block",
  },
]);

export const tag = style({
  backgroundColor: colors.slate600,
  color: colors.slate200,
  padding: "0.25rem 0.5rem",
  fontSize: "0.8rem",
  borderRadius: "0.25rem",
  display: "inline-flex",
  textDecoration: "none",
  letterSpacing: "0.025rem",
  margin: "0.5em 0",
  // boxShadow: `${colors.slate400} 0px 1px 0px 0px inset, ${colors.slate600} 0px -1px 0px 0px inset`,

  selectors: {
    "&:not(:last-of-type)": {
      marginRight: "1em",
    },
  },
});

export const tagsWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  marginBottom: "-0.5rem",

  selectors: {
    "> * &": {
      marginBottom: "0.5em",
    },
    "> & :not(:last-child) &": {
      marginRight: "1em",
    },
  },
});

export const projectImage = style({
  display: "none",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "block",
      alignSelf: "center",
    },
  },
});

export const projectHeading = style({
  // borderLeft: `4px solid ${colors.emerald500}`,
  color: colors.slate50,
  display: "inline-block",
});
