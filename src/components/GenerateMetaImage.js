import React, { useState, useEffect } from "react";
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
`;

const TitleStyles = styled.div`
  display: flex;
  flex: 1;
  gap: 2em;

  h1 {
    color: ${({ theme }) => theme.colors.green[3]};
    font-size: 5em;
    line-height: 1.6;
    margin: 0;
    flex: 0.6;
  }

  img {
    flex: 0.4;
    width: 100%;
    height: 360px;
    object-fit: cover;
    object-position: center;
    align-self: top;
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

const noOfDots = new Array(25).fill("");

const GenerateMetaImage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    params.get("title") && setTitle(params.get("title"));
    params.get("image") && setImage(params.get("image"));
  }, []);

  const [title, setTitle] = useState();
  const [image, setImage] = useState();

  return (
    <MetaImageWrapper>
      <TitleStyles>
        <h1>{title}</h1>
        {image && <img id="meta-image" src={image} alt="" />}
      </TitleStyles>
      <NameStyles>
        <img src="./me.jpeg" alt="" />
        <p>connordowson.dev</p>
      </NameStyles>
      <DotGrid>
        {noOfDots.map(() => {
          return <div />;
        })}
      </DotGrid>
    </MetaImageWrapper>
  );
};

export default GenerateMetaImage;
