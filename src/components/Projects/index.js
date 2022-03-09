import React from "react";
import Project from "./Project";

import * as styles from "./Projects.css";

const Projects = ({ projects }) => {
  return (
    <div className={styles.projectGrid}>
      {projects.map((project, index) => {
        return <Project key={index} project={project.node} />;
      })}
    </div>
  );
};

export default Projects;
