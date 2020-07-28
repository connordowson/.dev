import styled from "styled-components";

const Tag = styled.span`
  background: ${(props) =>
    props.color === "grey"
      ? props.theme.colors[props.color][6]
      : props.theme.colors[props.color][2]};
  color: ${(props) =>
    props.color === "grey"
      ? props.theme.colors[props.color][3]
      : props.theme.colors[props.color][8]};
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  border-radius: 0.25rem;
  display: inline-flex;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.025rem;
  font-weight: 600;
`;

export default Tag;
