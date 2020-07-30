import styled from "styled-components";
import PropTypes from "prop-types";

const Panel = styled.div`
  background: ${(props) => props.bgColor || props.theme.colors.grey[7]};
  padding: ${(props) => props.padding || `1em`};
  border-radius: 0.5rem;
  ${(props) =>
    props.topBorder &&
    `border-top: 0.5rem solid
    ${props.theme.colors[props.theme.accent][4]}`};
  overflow: hidden;
  ${(props) => props.theme.shadows[3]}
`;

Panel.propTypes = {
  bgColor: PropTypes.string,
  topBorder: PropTypes.bool,
  padding: PropTypes.string,
};

export default Panel;
