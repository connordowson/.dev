import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import Panel from "./Panel";
import Spacer from "./Spacer";
import Tag from "./Tag";
import { LinkButton } from "./Button";

const StyledPanel = styled(Panel)``;

const StyledSpacer = styled(Spacer)`
  padding: 1em;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -0.5rem;

  > * {
    margin-bottom: 0.5rem;
  }

  > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;
const ButtonsContainer = styled(Spacer)`
  background: ${(props) => props.theme.colors.grey[6]};
  padding: 1em;

  a {
    width: calc(50% - 0.5em);
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  border-radius: 0.5em;
  overflow: hidden;
`;

const ProjectImage = styled(Img)`
  display: none;
  @media ${(props) => props.theme.breakpoints[2]} {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: block;
    position: absolute;
  }
`;

const Project = ({ project }) => {
  const {
    title,
    description,
    image,
    technologies,
    demoLink,
    gitHubLink,
  } = project;

  return (
    <>
      <StyledPanel padding="0" topBorder>
        <StyledSpacer vertical="1em">
          <header>
            <h3>{title}</h3>
          </header>
          <div
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html,
            }}
          />
          <TagsContainer>
            {technologies &&
              technologies.map((technology) => (
                <Tag color="grey">{technology}</Tag>
              ))}
          </TagsContainer>
        </StyledSpacer>
        <ButtonsContainer horizontal="1em">
          {demoLink && <LinkButton href={demoLink}>View demo</LinkButton>}
          {gitHubLink && <LinkButton href={gitHubLink}>View code</LinkButton>}
        </ButtonsContainer>
      </StyledPanel>
      <ImageWrapper>
        <ProjectImage
          fluid={image.fluid}
          imgStyle={{
            objectFit: "contain",
            objectPosition: "top",
          }}
          alt={title}
        />
      </ImageWrapper>
    </>
  );
};

Project.propTypes = {};

export default Project;
