import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
const { colors } = vars;

export const postTitle = style({
  color: colors.emerald500,
  fontSize: "2.011rem",
  padding: "0.75rem 0",
  borderBottom: `1px solid ${colors.slate700}`,
  marginBottom: "1em",
});

export const postContainer = style({
  "@media": {
    "screen and (min-width: 425px)": {
      margin: "0 auto",
    },
    "screen and (min-width: 768px)": {
      width: "46rem",
    },
  },
});
