import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
import { button } from "../Button/Button.css";
const { colors } = vars;

export const blogPostsGrid = style({
  display: "grid",
  gap: "1em",
});

export const blogPostLinkContainer = style({
  selectors: {
    ["&:not(:first-of-type)"]: {
      marginTop: "0.5em",
    },
  },
});

export const blogPostLink = style({
  ":hover": {
    color: colors.emerald500,
  },
  ":link": {
    color: colors.emerald200,
  },
  ":visited": {
    color: colors.emerald200,
  },

  selectors: {
    [":visited &:hover"]: {
      color: "red",
    },
  },
});

export const blogPostDateContainer = style({
  color: colors.slate300,
  fontWeight: "300",
});

export const blogPostDateP = style({
  display: "inline-block",
  margin: "0.25em 0",
});

export const blogPostDateDot = style({
  margin: "0.5em",
});
