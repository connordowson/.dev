import styled from "styled-components";

const Section = styled.section`
  margin: 0 auto;
  padding: 1.5em 1.5em 3em;
  color: ${(props) => props.theme.colors.grey100};

  @media ${(props) => props.theme.breakpoints[1]} {
    width: 45em;
    padding: 1.5em 1.5em 6em;
  }

  @media ${(props) => props.theme.breakpoints[2]} {
    width: 60em;
  }
`;

export default Section;
