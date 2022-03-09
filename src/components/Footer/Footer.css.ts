import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
const { colors } = vars;

export const footerStyles = style({
  background: colors.slate700,
  padding: "1.5rem 1.5rem 10rem",
  // when more than one post change to this
  // padding: "1.5em 1.5em 8em",
  marginTop: "5rem",
  position: "relative",
});

export const buttonsWrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",

  "@media": {
    "screen and (min-width: 768px)": {
      width: "30em",
      margin: "0 auto",
    },
    "screen and (min-width: 1024px)": {
      width: "40em",
    },
  },
});

export const footerHeader = style({
  marginTop: "2.5rem",
});

export const footerHeading = style({
  color: colors.slate50,
  fontSize: "1.5rem",
  marginBottom: "1em",
  textAlign: "center",
});

export const footerImage = style({
  objectFit: "cover",
  objectPosition: "center",
  width: "7em",
  height: "7em",
  borderRadius: "50%",
  position: "absolute",
  top: "-3.5rem",
  left: "calc(50% - 3.5rem)",
  border: `0.25rem solid ${colors.slate700}`,
  boxShadow: "inset 0 0 0 2px rgba(0, 0, 0, 0.5);",
});
