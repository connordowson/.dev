import React from "react";
import { Link } from "gatsby";
import { button } from "./Button.css";
const Button = ({ children, ...rest }) => (
  <button className={button} {...rest}>
    {children}
  </button>
);
const LinkButton = ({ children, ...rest }) => (
  <Link className={button} {...rest}>
    {children}
  </Link>
);

export { Button, LinkButton };
