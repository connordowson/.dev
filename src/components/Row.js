import styled from "styled-components";

const Row = styled.div`
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints[1]} {
    width: 45em;
    padding: 0 1.5rem 3rem;
  }

  @media ${(props) => props.theme.breakpoints[2]} {
    width: 60em;
  }
`;

export default Row;
