import React from "react";
import styled from "styled-components";
import PropTypes, { string } from "prop-types";

import Spacer from "./Spacer";

const ProjectStyles = styled(Spacer)`
  background: ${props => props.theme.colors.grey[7]};
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Project = ({ project }) => {
  const {
    title,
    description,
    image,
    technologies,
    demoLink,
    gitHubLink
  } = project;

  return (
    <ProjectStyles vertical="1rem">
      <h3>{title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html
        }}
      />
      <div>
        {technologies &&
          technologies.map((technology, index) => (
            <a key={index}>{technology}</a>
          ))}
      </div>
      <div>
        {demoLink && <a href={demoLink}>View demo</a>}
        {gitHubLink && <a href={gitHubLink}>View code</a>}
      </div>
    </ProjectStyles>
  );
};

Project.propTypes = {};

export default Project;
