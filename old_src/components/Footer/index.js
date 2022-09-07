import React from "react";
import * as styles from "./Footer.css";

import { LinkButton } from "../Button";
import { icon } from "../Button/Button.css";

import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillDribbbleSquare,
} from "react-icons/ai";

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
