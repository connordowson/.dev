import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const HeroContainer = styled.div`
  background: ${(props) => props.theme.colors.grey[7]};
  padding: 3em 1.5em 3em;

  @media ${(props) => props.theme.breakpoints[1]} {
    margin-top: -112px;
  }

  @media ${(props) => props.theme.breakpoints[2]} {
    padding: 6em;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  grid-template-columns: minmax(0, 1fr);
  margin: 0 auto;
  align-items: center;

  @media ${(props) => props.theme.breakpoints[1]} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    width: 40em;
    padding: 5em 1.5em 5em;
  }

  @media ${(props) => props.theme.breakpoints[2]} {
    grid-template-columns: 3fr 2fr;
    width: 60em;
  }
`;

const HeroText = styled.p`
  color: ${(props) => props.theme.colors.grey[0]};
  font-size: 1.5em;
  font-weight: 700;
  font-family: ${(props) => props.theme.typography.headings};

  @media ${(props) => props.theme.breakpoints[1]} {
    font-size: 2em;
  }

  @media ${(props) => props.theme.breakpoints[2]} {
    font-size: 2.5em;
  }

  span {
    color: ${(props) => props.theme.colors[props.theme.accent][4]};
    font-family: ${(props) => props.theme.typography.headings};
    font-weight: 700;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 28em;
  align-self: center;
  margin: 0 auto;
`;

const HeroImage = styled(GatsbyImage)`   
 height: 22em;
width: 100%;
max-width: 28em;
object-fit: cover;
object-position: center;
vertical-align: middle;
border-radius: 0.25em;
${(props) => props.theme.shadows[3]}

@media ${(props) => props.theme.breakpoints[1]} {
  object-position: center;
  /* height: 28em; */
}

@media ${(props) => props.theme.breakpoints[2]} {
  height: 28em;
}`;

const DotGrid = styled.div`
  position: absolute;
  bottom: -1em;
  right: -1em;
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

const Hero = ({ heroImage }) => {
  const noOfDots = Array.from({ length: 25 }, (_, i) => i + 1);

  console.log(heroImage);

  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          Hi! I'm <span>Connor Dowson</span>, a front end web developer based in
          Bristol.
        </HeroText>
        <HeroImageContainer>
          <HeroImage image={heroImage} alt="Connor Dowson" />
          <DotGrid>
            {noOfDots.map(() => {
              return <div />;
            })}
          </DotGrid>
        </HeroImageContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
