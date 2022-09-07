import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
const { colors } = vars;

export const songGrid = style({
  display: "grid",
  gridTemplateColumns: " repeat(1, minmax(0, 1fr))",
  gap: "1em",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    "screen and (min-width: 1024px)": {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    },
  },
});

export const songCard = style({
  padding: "0.5rem",
  color: colors.slate50,
  backgroundColor: colors.slate700,
  boxShadow: `${colors.slate600} 0px 1px 0px 0px inset, ${colors.slate800} 0px -1px 0px 0px inset`,

  borderRadius: "0.5rem",
  display: "flex",
  width: "100%",
  alignItems: "center",
});

export const songAlbumArt = style({
  borderRadius: "0.25em",
  flexShrink: "0",
  alignSelf: "flex-start",
});

export const songInfo = style({
  marginLeft: "0.25rem",
  width: "calc(100% - 4.5em)",
});

export const songInfoText = style({
  display: "block",
  marginLeft: "0.5rem",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  paddingBottom: "0.1rem",
});

export const songTitle = style([
  songInfoText,
  {
    fontWeight: "700",
    fontFamily: "Poppins",
  },
]);

export const songArtist = style([
  songInfoText,
  {
    color: colors.slate300,
    fontSize: "0.9rem",
    marginTop: "0.25rem",
  },
]);

export const loaderContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
});

export const loader = style({
  margin: "0 auto",
});

const spin = keyframes({
  "0%": { strokeDashoffset: "-1" },
  "50%": { strokeDashoffset: "0" },
  "100%": { strokeDashoffset: "1" },
  from: {
    transform: "rotate(-4turn)",
  },
});

export const loaderStyles = style({
  strokeDasharray: "1 1",
  strokeDashoffset: "1",
  strokeLinecap: "round",
  animation: `${spin} 3s linear infinite`,
});

export const loaderText = style({
  fontSize: "1.5em",
  marginTop: "1rem",
  fontWeight: "700",
});

export const topSongsInfoText = style({
  marginBottom: "1.5em",
});
