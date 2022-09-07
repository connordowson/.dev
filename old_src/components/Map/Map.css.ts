import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
const { colors } = vars;

export const mapPrimary = style({
  fill: colors.slate600,
});

export const mapAccent = style({
  fill: colors.emerald400,
});

export const mapContainer = style({
  width: "140px",
  position: "absolute",
  top: "50%",
  right: "0",
  transform: "translate(0, -50%)",
  zIndex: "-1",
});

export const mapSVG = style({
  position: "relative",
  zIndex: "-1",
});
