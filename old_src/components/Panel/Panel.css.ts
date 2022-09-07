import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
const { colors } = vars;

export const panelStyles = style({
  backgroundColor: colors.slate700,
  borderRadius: "1rem",
  color: colors.slate200,
  position: "relative",
  boxShadow: `inset 0 1px 0 0 ${colors.slate600}`,
});
