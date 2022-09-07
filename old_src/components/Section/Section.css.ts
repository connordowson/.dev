import { style } from "@vanilla-extract/css";

export const sectionStyles = style({
  margin: "0 auto",
  padding: "1.5em 1.5em 3em",
  position: "relative",
  zIndex: "0",

  selectors: {
    "&:first-of-type": {
      paddingTop: "4.5rem",
    },
  },
});
