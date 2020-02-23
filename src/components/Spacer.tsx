import React, { FunctionComponent } from "react";
import styled from "styled-components";

type Props = {
  vertical?: string;
  horizontal?: string;
};

const SpacerWrapper = styled.div<Props>`

margin-top: ${(props: Props) => props.vertical};
    margin-left: ${(props: Props) => props.horizontal};
  a {
    margin-top: ${(props: Props) => props.vertical};
    margin-left: ${(props: Props) => props.horizontal};

    /* ${(props: Props) =>
      props.horizontal && `margin-left: ${props.horizontal};`} */
  }
`;

const Spacer: FunctionComponent<Props> = ({ children }) => {
  return <SpacerWrapper>{children}</SpacerWrapper>;
};

export default Spacer;
