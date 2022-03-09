import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";
import { button } from "../Button/Button.css";

const { colors, fonts } = vars;

export const mobileNav = style({
  "@media": {
    "screen and (min-width: 768px)": {
      display: "none",
    },
  },
});

export const desktopNav = style({
  display: "none",
  pointerEvents: "none",

  "@media": {
    "screen and (min-width: 768px)": {
      display: "inline-block",
      position: "sticky",
      top: "0",
      zIndex: "99",
      width: "100%",
      padding: "2em 1.5em",
    },
  },
});

export const desktopNavContents = style({
  width: "45rem",
  margin: "0 auto",
  left: "0",
  right: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "60rem",
    },
  },
});

export const navLogo = style({
  display: "flex",
  placeItems: "center",
  placeContent: "center",
  fontFamily: fonts.headings,
  fontWeight: "700",
  fontSize: "1.5em",
  backgroundColor: colors.emerald200,
  color: colors.emerald800,
  height: "2em",
  width: "2em",
  padding: "0.5em",
  borderRadius: "50%",
});

export const desktopNavUl = style({
  listStyleType: "none",
});

export const desktopNavLi = style({
  display: "inline-block",
});

export const desktopNavButton = style([
  button,
  {
    marginLeft: "2em",
  },
]);

export const backgroundCover = recipe({
  base: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
    backgroundColor: colors.slate800,
    transition: "opacity 0.1s ease-in-out",
    zIndex: "9",
  },
  variants: {
    isOpen: {
      true: {
        opacity: "0.7",
      },
      false: {
        opacity: "0",
        display: "none",
      },
    },
  },
});

export const burgerButton = recipe({
  base: {
    position: "fixed",
    bottom: "2em",
    right: "2em",
    background: colors.emerald500,
    borderRadius: "50%",
    border: "none",
    width: "5em",
    height: "5em",
    display: "flex",
    transition: "opacity 0.1s ease-in-out",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5em",
    zIndex: "11",
    cursor: "pointer",
  },
  variants: {
    isOpen: {
      true: {
        opacity: "0",
      },
      false: {
        opacity: "1",
      },
    },
  },
});

export const burgerBars = style({
  height: "0.5em",
  borderRadius: "0.25rem",
  width: "50%",
  backgroundColor: colors.slate800,
  transformOrigin: "1px",
});

export const mobileNavWrapper = style({
  position: "fixed",
  width: "100vw",
  height: "100vh",
  bottom: "0",
  zIndex: "9",
  padding: "1rem",
  pointerEvents: "none",
});

export const mobileNavContents = recipe({
  base: {
    position: "absolute",
    width: "calc(100% - 2em)",
    borderTop: `0.5rem solid ${colors.emerald500}`,
    transform: "translateY(0)",
    borderRadius: "0.5rem",
    background: colors.slate600,
    display: "flex",
    bottom: "1em",
    flexDirection: "column",
    alignItems: "flex-end",
    listStyleType: "none",
    zIndex: "20",
    transition: "transform 0.2s ease-in-out",
  },
  variants: {
    isOpen: {
      true: {
        transform: "translateY(0)",
      },
      false: {
        transform: "translateY(calc(100% + 2em))",
      },
    },
  },
});

export const mobileNavHeader = style({
  fontWeight: "700",
  display: "flex",
  justifyContent: "space-between",
  background: colors.slate700,
  padding: "1.5em",
  width: "100%",
  alignItems: "center",
});

export const mobileNavCloseButton = style({
  color: colors.emerald500,
  height: "2.5em",
  width: "2.5em",
  cursor: "pointer",
  pointerEvents: "all",
});

export const mobileNavButtonContainer = style({
  padding: "1.5em",
  width: "100%",
});

export const mobileNavButton = style([
  button,
  {
    display: "block",
    width: "100%",
    selectors: {
      [":not(:first-of-type) &"]: {
        marginTop: "2em",
      },
    },
  },
]);
