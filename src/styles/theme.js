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

  shadows: [
    `box-shadow: 0 0.125em 0.313em rgba(50,50,93,.09), 0 0.063em 0.125em rgba(0,0,0,.07);`,
    `box-shadow: 0 0.250em 0.375em rgba(50,50,93,.09), 0 0.063em 0.188em rgba(0,0,0,.08);`,
    `box-shadow: 0 0.063em 0.313em 0 rgba(0,0,0,.07), 0 0.438em 1.063em 0 rgba(0,0,0,.1);`,
    `box-shadow: 0 0.938em 2.188em rgba(50,50,93,.1), 0 0.313em 0.938em rgba(0,0,0,.07);`,
    `box-shadow: 0 0.938em 2.188em rgba(50,50,93,.15), 0 0.313em 0.938em rgba(0,0,0,.1);`,
  ],

  breakpoints: sizes.map((size) => `(min-width: ${size})`),
};
