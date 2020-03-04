import React from "react";
import styled from "styled-components";

import Spacer from "../components/Spacer";

const HeroWrapper = styled.div`
  padding: 0 1.5rem;
  background: ${props => props.theme.colors.grey800};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeroText = styled.p`
  color: ${props => props.theme.colors.grey100};
  font-size: 1.5rem;
  font-weight: 700;
`;

const HeroImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 24rem;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Spacer vertical="2em">
        <HeroText>
          Hi! I'm Connor Dowson, a front end web developer based in Bristol.
        </HeroText>
        <HeroImage src="/me.jpeg" alt="Connor Dowson" />
      </Spacer>
    </HeroWrapper>
  );
};

export default Hero;
