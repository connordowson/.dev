import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Panel from "./Panel";
import Spacer from "./Spacer";
import Tag from "./Tag";
import { LinkButton } from "./Button";

const StyledPanel = styled(Panel)``;

const StyledSpacer = styled(Spacer)`
  padding: 1.5em;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -0.5em;

  > * {
    margin-bottom: 0.5em;
  }

  > :not(:last-child) {
    margin-right: 1em;
  }
`;
const ButtonsContainer = styled(Spacer)`
  background: ${(props) => props.theme.colors.grey[6]};
  padding: 1.5em;

  a {
    width: calc(50% - 0.75em);
    text-align: center;
  }
`;

const ProjectImageContainer = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints[2]} {
    display: block;
    align-self: center;
  }
`;

const ProjectImage = styled(Img)`
  @media ${(props) => props.theme.breakpoints[2]} {
    ${(props) => props.theme.shadows[3]}
  }
`;

const Project = ({ project }) => {
  const { title, image, technologies, links } = project.frontmatter;

  return (
    <>
      <StyledPanel padding="0" topBorder>
        <StyledSpacer vertical="1.5em">
          <header>
            <h3>{title}</h3>
          </header>
          <div>
            <MDXRenderer>{project.body}</MDXRenderer>
          </div>
          <TagsContainer>
            {technologies &&
              technologies.map((technology) => (
                <Tag color="grey">{technology}</Tag>
              ))}
          </TagsContainer>
        </StyledSpacer>
        <ButtonsContainer horizontal="1.5em">
          {links.demo && <LinkButton href={links.demo}>View demo</LinkButton>}
          {links.code && <LinkButton href={links.code}>View code</LinkButton>}
        </ButtonsContainer>
      </StyledPanel>
      <ProjectImageContainer>
        <ProjectImage fixed={image.childImageSharp.fixed} alt={title} />
      </ProjectImageContainer>
    </>
  );
};

export default Project;
