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
            ":is(p, li, a) > code": {
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
              // color: "hotpink",
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
    fontSize: {
      "size-0": "clamp(0.83rem, 0.90rem + -0.32vw, 0.67rem)",
      base: "clamp(1.00rem, 1.00rem + 0.00vw, 1.00rem)",
      "size-1": "clamp(1.20rem, 1.08rem + 0.59vw, 1.50rem)",
      "size-2": "clamp(1.44rem, 1.12rem + 1.58vw, 2.25rem)",
      "size-3": "clamp(1.73rem, 1.09rem + 3.21vw, 3.38rem)",
      "size-4": "clamp(2.07rem, 0.91rem + 5.83vw, 5.06rem)",
      "size-5": "clamp(2.49rem, 0.50rem + 9.96vw, 7.59rem)",
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
