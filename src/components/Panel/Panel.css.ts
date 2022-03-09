import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
const { colors } = vars;

export const panelStyles = style({
  backgroundColor: colors.slate700,
  borderRadius: "1rem",
  color: colors.slate200,
  // borderTop: `0.5rem solid ${colors.emerald500}`,
  position: "relative",
  // overflow: "hidden",
  boxShadow: `inset 0 1px 0 0 ${colors.slate600}`,
  // selectors: {
  //   "&:before": {
  //     content: "",
  //     height: "0.5rem",
  //     width: "100%",
  //     // backgroundColor: colors.emerald500,
  //     boxShadow: `${colors.emerald400} 0px 1px 0px 0px inset`,
  //     position: "absolute",
  //     top: "-0.5rem",
  //     left: "0",
  //   },
  // },
});
