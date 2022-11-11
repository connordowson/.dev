/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          fontFamily: {
            mono: ["Fira Code"],
          },
          css: {
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.emerald.500"),
            },

            "p, ul, ol, strong, em, li, time": {
              color: theme("colors.slate.800"),
              lineHeight: "1.7",
            },

            "a:any-link": {
              color: `${theme("colors.emerald.600")}`,
            },
            "a:hover": {
              color: theme("colors.emerald.600"),
            },
            pre: { border: `1px solid ${theme("colors.slate.700")}` },
            "code:not(pre code)": {
              padding: "0.2em 0.5em",
              color: theme("colors.slate.200"),
              color: "#b7c5d3",
              fontSize: "0.9em",
              backgroundColor: "#1e1e1e",
              borderRadius: "0.5em",
              border: `1px solid ${theme("colors.slate.700")}`,
              display: "inline-block",
              fontWeight: "400",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },

            hr: {
              height: "2px",
              border: "0",
              padding: "0",
              backgroundColor: theme("colors.slate.300"),
            },

            ".remark-code-title": {
              backgroundColor: theme("colors.emerald.200"),
              color: theme("colors.emerald.800"),
              display: "inline-block",
              fontFamily: theme("fontFamily.mono"),
              padding: "0.5em 0.7em",
              borderRadius: "0.5em 0.5em 0 0",
            },
            ".remark-code-title + pre": {
              borderRadius: "0 0.5em 0.5em 0.5em",
              marginTop: "0",
            },
          },
        },
        dark: {
          css: {
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.emerald.400"),
            },
            "p, ul, ol, strong, em, li, time": {
              color: theme("colors.slate.100"),
            },

            "a:any-link": {
              color: theme("colors.emerald.400"),
            },
            "a:hover": {
              color: theme("colors.emerald.500"),
            },
            hr: {
              backgroundColor: theme("colors.slate.700"),
            },
            thead: {
              borderBottomColor: theme("colors.slate.600"),
            },

            "tbody tr": {
              borderBottomColor: theme("colors.slate.700"),
            },
            th: {
              color: theme("colors.slate.100"),
            },
            td: {
              color: theme("colors.slate.300"),
            },
          },
        },
      }),
    },
    fontFamily: {
      body: ["Inter"],
      display: ["Inter Display"],
      mono: ["Fira Code"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    ({ matchUtilities, theme }) => {
      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
  darkMode: ["class", 'html[data-theme="dark"]'],
};
