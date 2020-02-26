import styled from "styled-components";

type Props = {
  vertical?: string;
  horizontal?: string;
};

const Spacer = styled.div<Props>`
  * + * {
    margin-top: ${props => props.vertical};
    margin-left: ${props => props.horizontal};
  }
`;
export default Spacer;
