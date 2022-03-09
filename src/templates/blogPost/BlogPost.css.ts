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
