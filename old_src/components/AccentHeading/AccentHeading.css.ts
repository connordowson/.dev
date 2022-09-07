import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
const { colors } = vars;

export const accentHeading = style({
  color: colors.emerald500,
  marginBottom: "1rem",
});
