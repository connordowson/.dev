import React from "react";
import { panelStyles } from "./Panel.css";
const Panel = ({ children, ...rest }) => (
  <div className={panelStyles} {...rest}>
    {children}
  </div>
);
export default Panel;
