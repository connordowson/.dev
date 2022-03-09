import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { slugify } from "../../helpers";
import * as styles from "./MDXStyles.css";
import HeadingAnchor from "./headingAnchor";

const h1 = (props) => (
  <h1 className={styles.headings} id={slugify(props.children)} {...props}>
    <HeadingAnchor headingID={slugify(props.children)} />

    {props.children}
  </h1>
);
const h2 = (props) => (
  <h2 className={styles.headings} id={slugify(props.children)} {...props}>
    <HeadingAnchor headingID={slugify(props.children)} />

    {props.children}
  </h2>
);

const h3 = (props) => (
  <h3 className={styles.headings} id={slugify(props.children)} {...props}>
    <HeadingAnchor headingID={slugify(props.children)} />

    {props.children}
  </h3>
);
const h4 = (props) => (
  <h4 className={styles.headings} id={slugify(props.children)} {...props}>
    <HeadingAnchor headingID={slugify(props.children)} />

    {props.children}
  </h4>
);
const h5 = (props) => (
  <h5 className={styles.headings} id={slugify(props.children)} {...props}>
    <HeadingAnchor headingID={slugify(props.children)} />

    {props.children}
  </h5>
);

const h6 = (props) => (
  <h6 className={styles.headings} id={slugify(props.children)} {...props}>
    <HeadingAnchor headingID={slugify(props.children)} />

    {props.children}
  </h6>
);
const p = (props) => <p className={styles.p} {...props} />;
const pre = (props) => <pre className={styles.pre} {...props} />;
const ul = (props) => <ul className={styles.lists} {...props} />;
const ol = (props) => <ol className={styles.lists} {...props} />;
const li = (props) => <li className={styles.li} {...props} />;
const hr = (props) => <hr className={styles.hr} {...props} />;
const table = (props) => <table className={styles.table} {...props} />;
const tr = (props) => <tr className={styles.tr} {...props} />;
const td = (props) => <td className={styles.tdth} {...props} />;
const th = (props) => <th className={styles.tdth} {...props} />;
const blockquote = (props) => (
  <blockquote className={styles.blockquote} {...props} />
);

const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  p,
  ul,
  ol,
  li,
  hr,
  table,
  tr,
  td,
  th,
  blockquote,
};

export const CustomMDXProvider = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
