import React from "react";
import PropTypes, { string } from "prop-types";

import Spacer from "../components/Spacer";

interface Props {
  project: any;
}

const Project = ({ project }: Props) => {
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
      <h2>{title}</h2>
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
