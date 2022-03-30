import React, { useState, useEffect } from "react";
import * as styles from "./Navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";

import { LinkButton } from "../Button";

const Burger = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <>
      <button
        className={styles.burgerButton({
          isOpen,
        })}
        name="Mobile navigation menu"
        aria-label="Mobile navigation menu button"
        open={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className={styles.burgerBars} />
        <div className={styles.burgerBars} />
        <div className={styles.burgerBars} />
      </button>
      <div
        className={styles.backgroundCover({
          isOpen,
        })}
      />
      <nav className={styles.mobileNavWrapper}>
        <ul className={styles.mobileNavContents({ isOpen })}>
          <header className={styles.mobileNavHeader}>
            <h2>Menu</h2>
            <AiFillCloseCircle
              className={styles.mobileNavCloseButton}
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </header>
          <div className={styles.mobileNavButtonContainer}>
            {links.map((link) => (
              <li>
                <LinkButton
                  className={styles.mobileNavButton}
                  to={link.link}
                  data-button
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </LinkButton>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Burger;
