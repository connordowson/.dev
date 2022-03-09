import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
const { colors } = vars;

export const heroContainer = style({
  background: colors.slate700,
  padding: "3rem 1.5rem 3rem",

  "@media": {
    "screen and (min-width: 768px)": {
      marginTop: "-112px",
    },
    "screen and (min-width: 1024px)": {
      padding: "6rem",
    },
  },
});

export const heroContent = style({
  display: "grid",
  gap: "2em",
  gridTemplateColumns: "minmax(0, 1fr)",
  margin: "0 auto",

  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      alignItems: "center",
      width: "40rem",
      padding: "5em 1.5em 5em",
    },
    "screen and (min-width: 1024px)": {
      gridTemplateColumns: "3fr 2fr",
      width: "60rem",
    },
  },
});

export const heroText = style({
  color: colors.slate100,
  fontSize: "1.5em",
  fontWeight: "700",
  fontFamily: "Poppins",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "2em",
    },
    "screen and (min-width: 1024px)": {
      fontSize: "2.5em",
    },
  },
});

export const heroTextAccent = style({
  color: colors.emerald500,
});

export const heroImageContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "28rem",
  alignSelf: "center",
  margin: "0 auto",
});

export const heroImage = style({
  height: "22rem",
  width: "100%",
  maxWidth: "28rem",
  objectFit: "cover",
  objectPosition: "center",
  verticalAlign: "middle",
  borderRadius: "0.25rem",
  "@media": {
    "screen and (min-width: 1024px)": {
      height: "28em",
    },
  },
});

export const dotGrid = style({
  position: "absolute",
  bottom: "-1rem",
  right: "-1rem",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gap: "1em",
  zIndex: "1",
});

export const dot = style({
  width: "0.5rem",
  height: "0.5rem",
  zIndex: "2",
  borderRadius: "50%",
  backgroundColor: colors.emerald500,
});
