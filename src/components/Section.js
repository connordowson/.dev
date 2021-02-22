import styled from "styled-components";

const Section = styled.section`
  margin: 0 auto;
  padding: 1.5em 1.5em 3em;
  color: ${(props) => props.theme.colors.grey[0]};
  background: ${(props) => props.theme.colors.grey[8]};
  position: relative;
  z-index: -2;
`;

export default Section;
