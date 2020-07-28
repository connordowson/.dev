import React from "react";
import styled from "styled-components";

const LoaderStyles = styled.svg`
  stroke-dasharray: 1 1;
  stroke-dashoffset: 1;
  stroke-linecap: round;
  animation: spin 3s linear infinite;
  /* animation-timing-function: cubic-bezier(.5,0,.5,1); */
  transform-origin: center center;
  @keyframes spin {
    0% {
      stroke-dashoffset: -1;
    }
    50% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 1;
    }
    from {
      transform: rotate(-4turn);
    }
  }
`;

const Loader = ({ height, width, radius }) => {
  return (
    <LoaderStyles height={height} width={height}>
      <circle
        id="loader"
        cx={height / 2}
        cy={width / 2}
        r={radius}
        stroke="currentColor"
        pathLength="1"
        strokeWidth="8"
        fill="none"
      />
    </LoaderStyles>
  );
};

export default Loader;
