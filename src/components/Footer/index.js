import React from "react";
import styled from "styled-components";
import * as styles from "./Footer.css";

import { LinkButton } from "../Button";
import { icon } from "../Button/Button.css";

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
    <footer className={styles.footerStyles} id="contact-me">
      <img
        className={styles.footerImage}
        src={"/connordowson_footer.webp"}
        alt="Connor Dowson"
        loading="lazy"
      />
      <header className={styles.footerHeader}>
        <h2 className={styles.footerHeading}>Contact me</h2>
      </header>
      <div className={styles.buttonsWrapper}>
        <LinkButton href="mailto:connormwdowson@gmail.com" data-button>
          <AiFillMail className={icon} />
          Email
        </LinkButton>
        <LinkButton href="https://github.com/connordowson" data-button>
          <AiFillGithub className={icon} />
          GitHub
        </LinkButton>

        <LinkButton href="https://linkedin.com/in/connor-dowson" data-button>
          <AiFillLinkedin className={icon} />
          LinkedIn
        </LinkButton>

        <LinkButton href="https://dribbble.com/connordowson" data-button>
          <AiFillDribbbleSquare className={icon} /> dribbble
        </LinkButton>
      </div>
    </footer>
  );
};

export default Footer;
