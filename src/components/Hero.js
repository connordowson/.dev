import React from "react";
import styled from "styled-components";

import Spacer from "./Spacer";

const HeroContainer = styled.div`
  background: ${(props) => props.theme.colors.grey[7]};
  padding: 3em 1.5em 3em;

  @media ${(props) => props.theme.breakpoints[2]} {
    padding: 6em;
    margin-bottom: 6em;
  }
`;

const HeroContent = styled(Spacer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media ${(props) => props.theme.breakpoints[1]} {
  }

  @media ${(props) => props.theme.breakpoints[2]} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3em 1.5em 3em;
    width: 64em;
    margin: 0 auto;
  }
`;

const HeroText = styled.p`
  color: ${(props) => props.theme.colors.grey[0]};
  font-size: 1.5em;
  font-weight: 700;
  font-family: ${(props) => props.theme.typography.headings};

  @media ${(props) => props.theme.breakpoints[2]} {
    width: 50%;
    font-size: 3em;
  }

  span {
    color: ${(props) => props.theme.colors[props.theme.accent][4]};
    font-family: ${(props) => props.theme.typography.headings};
    font-weight: 700;
  }
`;

const HeroImage = styled.img`
  object-fit: cover;
  object-position: center -40px;
  width: 100%;
  height: 24em;
  vertical-align: middle;
  border-radius: 0.25em;

  @media ${(props) => props.theme.breakpoints[1]} {
    height: 28em;
    object-position: center;
  }
`;

const DotGrid = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1em;
  z-index: 1;

  div {
    width: 0.5em;
    height: 0.5em;
    background: ${(props) => props.theme.colors[props.theme.accent][4]};
    border-radius: 50%;
    z-index: 5;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent vertical="2em">
        <HeroText>
          Hi! I'm <span>Connor Dowson</span>, a front end web developer based in
          Bristol.
        </HeroText>
        <div>
          <HeroImage src="/me.jpeg" alt="Connor Dowson" />
          <DotGrid>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </DotGrid>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
