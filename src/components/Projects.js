import React from "react";

import styled from "styled-components";

import Project from "./Project";

const ProjectsGrid = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  align-items: start;

  @media ${(props) => props.theme.breakpoints[2]} {
    /* grid-template-columns: 5fr 3fr; */
  }
`;

const Projects = ({ projects }) => {
  return (
    <ProjectsGrid>
      {projects.map((project, index) => {
        return <Project key={index} project={project.node} />;
      })}
    </ProjectsGrid>
  );
};

export default Projects;
