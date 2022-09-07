import { style } from "@vanilla-extract/css";

export const rowStyles = style({
  margin: "0 auto",

  "@media": {
    "screen and (min-width: 768px)": {
      width: "45rem",
      padding: "0 1.5rem 3rem",
    },
    "screen and (min-width: 1024px)": {
      width: "60rem",
    },
  },
});
