import React from "react";
import PropTypes from "prop-types";
import Spacer from "./Spacer";
import Project from "./Project";

import Section from "./Section";

const Projects = ({ projects }) => {
  return (
    <Section>
      <Spacer vertical="2rem">
        <h2>Projects</h2>
        {projects.map((project, index) => {
          return <Project project={project.node} />;
        })}
      </Spacer>
    </Section>
  );
};

export default Projects;
