import React from "react";
import * as styles from "./Navbar.css";

import Burger from "./Burger";

import { LinkButton } from "../Button";

const Navbar = ({ links }) => {
  return (
    <>
      <nav className={styles.desktopNav}>
        <div className={styles.desktopNavContents}>
          <span className={styles.navLogo}>CD</span>

          <ul className={styles.desktopNavUl}>
            {links.map((link) => (
              <li className={styles.desktopNavLi}>
                <LinkButton
                  className={styles.desktopNavButton}
                  to={link.link}
                  data-button
                >
                  {link.name}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className={styles.mobileNav}>
        <Burger links={links} />
      </div>
    </>
  );
};

export default Navbar;
