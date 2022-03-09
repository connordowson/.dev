import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import * as styles from "./Projects.css";

import Panel from "../Panel";
import { LinkButton } from "../Button";

const Project = ({ project }) => {
  const { title, image, technologies, links } = project.frontmatter;

  return (
    <>
      <Panel>
        <div className={styles.projectDetails}>
          <header>
            <h3 className={styles.projectHeading}>{title}</h3>
          </header>
          <div>
            <MDXRenderer>{project.body}</MDXRenderer>
          </div>
          <div className={styles.tagsWrapper}>
            {technologies &&
              technologies.map((technology) => (
                <span className={styles.tag}>{technology}</span>
              ))}
          </div>
        </div>
        <div className={styles.buttonsWrapper}>
          {links.demo && (
            <LinkButton
              className={styles.projectLinkButton}
              href={links.demo}
              data-button
            >
              View demo
            </LinkButton>
          )}
          {links.code && (
            <LinkButton
              className={styles.projectLinkButton}
              href={links.code}
              data-button
            >
              View code
            </LinkButton>
          )}
        </div>
      </Panel>
      <div className={styles.projectImage}>
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt={title}
        />
      </div>
    </>
  );
};

export default Project;
