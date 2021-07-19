import React from "react";
import styled from "styled-components";

const MetaImageWrapper = styled.div`
  width: 1600px;
  height: 900px;
  background: ${({ theme }) => theme.colors.grey[8]};
  border: 1.5em solid ${({ theme }) => theme.colors.green[3]};
  display: flex;
  gap: 2em;
  flex-direction: column;
  padding: 3em;
  position: relative;

  img {
    height: 8em;
    width: 8em;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }
`;

const TitleStyles = styled.div`
  flex: 1;
  h1 {
    color: ${({ theme }) => theme.colors.green[3]};
    font-size: 5.2em;
    line-height: 1.6;
    margin: 0;
  }
`;

const NameStyles = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;

  img {
    height: 9em;
    width: 9em;
    object-fit: cover;
    object-position: 50% 20%;
    border-radius: 50%;
  }
  p {
    font-size: 4em;
  }
`;

const DotGrid = styled.div`
  position: absolute;
  bottom: 3em;
  right: 3em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1em;
  z-index: 1;

  div {
    width: 0.75em;
    height: 0.75em;
    background: ${(props) => props.theme.colors[props.theme.accent][4]};
    border-radius: 50%;
    z-index: 5;
  }
`;

const noOfDots = Array.from({ length: 25 }, (_, i) => i + 1);

const GenerateMetaImage = () => (
  <MetaImageWrapper>
    <TitleStyles>
      <h1>View draft posts whilst running your Gatsby blog in development</h1>
    </TitleStyles>
    <NameStyles>
      <img src="./me.jpeg" />
      <p>connordowson.dev</p>
    </NameStyles>
    <DotGrid>
      {noOfDots.map(() => {
        return <div />;
      })}
    </DotGrid>
  </MetaImageWrapper>
);

export default GenerateMetaImage;
