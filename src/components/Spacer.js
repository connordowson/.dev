import styled from "styled-components";
import PropTypes from "prop-types";

const Spacer = styled.div`
  * + * {
    margin-top: ${props => props.vertical};
    margin-left: ${props => props.horizontal};
  }
`;

Spacer.propTypes = {
  vertical: PropTypes.string,
  horizontal: PropTypes.string
};

export default Spacer;
