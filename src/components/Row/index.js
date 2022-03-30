import React from "react";
import { rowStyles } from "./Row.css";

const Row = ({ children }) => <div className={rowStyles}>{children}</div>;

export default Row;
