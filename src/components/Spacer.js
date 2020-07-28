import styled from "styled-components";

const Spacer = styled.div`
  > *:not(:first-child) {
    margin-top: ${(props) => props.vertical};
    margin-left: ${(props) => props.horizontal};
  }
`;

export default Spacer;
