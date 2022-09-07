import React from "react";
import { sectionStyles } from "./Section.css";

const Section = ({ children }) => (
  <section className={sectionStyles}>{children}</section>
);

export default Section;
