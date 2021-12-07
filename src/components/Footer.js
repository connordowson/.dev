import React from "react";
import styled from "styled-components";

import { LinkButton } from "./Button";

import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillDribbbleSquare,
} from "react-icons/ai";

const FooterStyles = styled.footer`
  background: ${(props) => props.theme.colors.grey[7]};
  padding: 1.5em 1.5em 10em;
  // when more than one post change to this
  /* padding: 1.5em 1.5em 8em; */
  margin-top: 5em;
  position: relative;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;

    @media ${(props) => props.theme.breakpoints[1]} {
      width: 30em;
      margin: 0 auto;
    }

    @media ${(props) => props.theme.breakpoints[2]} {
      width: 40em;
    }
  }

  svg {
    margin-right: 0.4em;
  }

  header {
    margin-top: 2.5em;
    h2 {
      color: ${(props) => props.theme.colors.grey[0]};
      font-size: 1.5em;
      margin-bottom: 1em;
      text-align: center;
    }
  }

  img {
    object-fit: cover;
    object-position: center;
    width: 7em;
    height: 7em;
    border-radius: 50%;
    position: absolute;
    top: -3.5em;
    left: calc(50% - 3.5em);
    border: 0.25em solid ${(props) => props.theme.colors.grey[7]};
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.5);
  }
`;

const Footer = () => {
  return (
    <FooterStyles id="contact-me">
      <img
        src={"/connordowson_footer.webp"}
        alt="Connor Dowson"
        loading="lazy"
      />
      <header>
        <h2>Contact me</h2>
      </header>
      <div>
        <LinkButton href="mailto:connormwdowson@gmail.com">
          <AiFillMail />
          Email
        </LinkButton>
        <LinkButton href="https://github.com/connordowson">
          <AiFillGithub />
          GitHub
        </LinkButton>

        <LinkButton href="https://linkedin.com/in/connor-dowson">
          <AiFillLinkedin />
          LinkedIn
        </LinkButton>

        <LinkButton href="https://dribbble.com/connordowson">
          <AiFillDribbbleSquare /> dribbble
        </LinkButton>
      </div>
    </FooterStyles>
  );
};

export default Footer;
