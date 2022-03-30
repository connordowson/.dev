import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
const { colors } = vars;

export const button = style({
  background: colors.emerald200,
  color: colors.emerald800,
  border: "none",
  appearance: "none",
  padding: "0.75rem 1.25rem",
  borderRadius: "0.5rem",
  display: "inline",
  // alignItems: "center",
  textAlign: "center",
  // justifyContent: "center",
  textDecoration: "none",
  textTransform: "uppercase",
  letterSpacing: "0.025em",
  fontWeight: "600",
  transition: "background 100ms ease-in-out",
  cursor: "pointer",
  pointerEvents: "auto",
  verticalAlign: "baseline",
  boxShadow: `${colors.emerald100} 0px 1px 0px 0px inset, ${colors.emerald300} 0px -1px 0px 0px inset`,

  selectors: {
    "&:focus": {
      outline: `2px solid ${colors.slate100}`,
      outlineOffset: "2px",
    },
    "&:hover": {
      background: colors.emerald100,
      boxShadow: `${colors.emerald50} 0px 1px 0px 0px inset, ${colors.emerald200} 0px -1px 0px 0px inset`,
    },
  },
});

export const icon = style({
  fill: colors.emerald600,
  display: "inline-block",
  marginRight: "0.25rem",
  verticalAlign: "-2px",
});
