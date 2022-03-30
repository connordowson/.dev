import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
const { colors } = vars;

export const metaImageWrapper = style({
  width: "1600px",
  height: "900px",
  backgroundColor: colors.slate800,
  border: `1.5rem solid ${colors.emerald300}`,
  display: "flex",
  gap: "2em",
  flexDirection: "column",
  padding: "3em",
  position: "relative",
});

export const titleWrapper = style({
  display: "flex",
  flex: "1",
  gap: "2em",
});

export const title = style({
  color: colors.emerald400,
  fontSize: "5rem",
  lineHeight: "1.6",
  margin: "0",
  flex: "0.6",
});

export const image = style({
  flex: "0.4",
  width: "100%",
  height: "360px",
  objectFit: "cover",
  objectPosition: "center",
  alignSelf: "top",
});

export const nameWrapper = style({
  display: "flex",
  gap: "2em",
  alignItems: "center",
});

export const profileImage = style({
  height: "9rem",
  width: "9rem",
  objectFit: "cover",
  objectPosition: "50% 50%",
  borderRadius: "50%",
});

export const siteURL = style({
  fontSize: "4rem",
});

export const dotGrid = style({
  position: "absolute",
  bottom: "3em",
  right: "3em",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gap: "1em",
  zIndex: "1",
});

export const dot = style({
  width: "0.75em",
  height: "0.75em",
  zIndex: "5",
  borderRadius: "50%",
  backgroundColor: colors.emerald500,
});
