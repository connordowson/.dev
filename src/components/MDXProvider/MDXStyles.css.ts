import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
const { colors } = vars;

export const headings = style({
  borderBottom: `1px solid ${colors.slate700}`,
  marginBottom: "1rem",
  padding: "0.75rem 0",
  position: "relative",
  selectors: {
    ["&:first-child"]: {
      opacity: "1",
      // color: "red",
    },
  },
});

export const h1 = style({});

export const headingAnchorStyles = style({
  fill: colors.emerald200,
  position: "absolute",
  left: "-28px",
  opacity: "0",
  transition: "opacity 100ms ease-in-out",
  selectors: {
    [`${headings}:hover &`]: {
      opacity: "1",
    },
  },
});

export const p = style({
  marginBottom: "1em",
});

export const lists = style({
  listStylePosition: "inside",
  marginBottom: "1em",
  paddingLeft: "0",
});

export const li = style({
  margin: "0 1em",
});

export const pre = style({
  border: `1px solid ${colors.slate700}`,
  borderRadius: "0.5em",
  marginBottom: "1em",
  "::before": {
    content: "attr(data-language)",
    fontFamily: "inherit",
    display: "inline-block",
    position: "absolute",
    top: "0",
    right: "0.5em",
    background: colors.emerald200,
    color: colors.emerald800,
    padding: "0.25em 0.5em",
    borderRadius: "0 0 0.5em 0.5em",
    fontSize: "0.9em",
  },
});

export const hr = style({
  height: "2px",
  border: "0",
  padding: "0",
  backgroundColor: colors.slate700,
});

export const table = style({
  display: "block",
  width: "max-content",
  maxWidth: "100%",
  overflow: "auto",
  borderSpacing: "0",
  borderCollapse: "collapse",
  marginBottom: "1em",
});

export const tr = style({
  borderTop: `1px solid ${colors.slate600}`,
  selectors: {
    "&:nth-child(2n)": {
      backgroundColor: colors.slate700,
    },
  },
});

export const tdth = style({
  padding: "6px 13px",
  border: `1px solid ${colors.slate600}`,
});

export const blockquote = style({
  marginBottom: "1em",
  padding: "0 1em",
  borderLeft: `0.25rem solid ${colors.slate600}`,
  marginLeft: "0",
});

export const a = style({
  textDecoration: "underline !important",
});
