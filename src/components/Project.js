import React from "react";
import PropTypes, { string } from "prop-types";

import Spacer from "./Spacer";

const Project = ({ project }) => {
  const {
    title,
    description,
    image,
    technologies,
    gitHubLink,
    demoLink
  } = project;

  return (
    <Spacer vertical="1rem">
      <h3>{title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html
        }}
      />
    </Spacer>
  );
};

Project.propTypes = {};

export default Project;
