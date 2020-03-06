import React from "react";
import styled from "styled-components";

import Section from "../components/Section";
import Spacer from "../components/Spacer";

const FooterStyles = styled.footer`
  ul li {
    list-style-type: none;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <Section>
      <FooterStyles>
        <ul>
          <Spacer vertical="1em">
            <li>
              <a href="mailto:connormwdowson@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://github.com/connordowson">GitHub</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/connor-dowson">LinkedIn</a>
            </li>
            <li>
              <a href="https://dribbble.com/connordowson">dribbble</a>
            </li>
          </Spacer>
        </ul>
      </FooterStyles>
    </Section>
  );
};

Footer.propTypes = {};

export default Footer;
