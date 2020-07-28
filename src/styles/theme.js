import colors from "./colors";
import typography from "./typography";
import sizes from "./sizes";

export default {
  colors: {
    ...colors,
  },

  typography: {
    ...typography,
  },
  accent: "green",

  shadows: {},

  breakpoints: sizes.map((size) => `(min-width: ${size})`),
};
