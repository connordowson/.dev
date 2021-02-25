import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

import { Link } from "gatsby";

import Spacer from "./Spacer";
import { ButtonStyles } from "./Button";

const BurgerStyles = styled.button`
  position: fixed;
  bottom: 2em;
  right: 2em;
  border-right-style: 3em;
  border-radius: 50%;
  background: ${(props) => props.theme.colors[props.theme.accent][4]};
  border: none;
  width: 5em;
  height: 5em;
  display: flex;
  opacity: ${(props) => (props.open ? "0" : "100%")};
  pointer-events: ${(props) => (props.open ? "none" : "auto")};
  transition: opacity 0.1s ease-in-out;
  flex-direction: column;
  justify-content: center;
  grid-gap: 0.5em;
  align-items: center;
  z-index: 11;
  cursor: pointer;
  box-shadow: 0 0.063em 0.313em 0 rgba(0, 0, 0, 0.07),
    0 0.438em 1.063em 0 rgba(0, 0, 0, 0.1);

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.grey[7]},
      0 0 0 4px ${(props) => props.theme.colors.grey[1]};
  }

  @-moz-document url-prefix() {
    &:focus {
      outline: 2px solid ${(props) => props.theme.colors.grey[1]};
      outline-offset: 2px;
      -moz-outline-radius: 5em;
    }
  }

  div {
    height: 0.5em;
    border-radius: 0.25rem;
    width: 50%;
    background: ${(props) => props.theme.colors.grey[8]};
    transform-origin: 1px;
  }
`;

const MobileNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  z-index: 10;
  scroll-behavior: none;
  padding: 1em;
`;

const NavLinkButton = styled(Link)`
  ${ButtonStyles}
  width: 100%;
`;

const BackgroundCover = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.grey[8]};
  top: 0;
  left: 0;
  z-index: 9;
  opacity: ${(props) => (props.open ? "0.7" : "0")};
  pointer-events: ${(props) => (props.open ? "none" : "auto")};
  transition: opacity 0.1s ease-in-out;
`;

const MobileNavContent = styled.ul`
  position: absolute;
  width: calc(100% - 2em);
  border-top: 0.5em solid
    ${(props) => props.theme.colors[props.theme.accent][4]};
  transform: translateY(0);
  ${(props) => props.theme.colors[props.theme.accent][4]};
  border-radius: 0.25em;
  background: ${(props) => props.theme.colors.grey[6]};
  display: flex;
  bottom: 1em;
  flex-direction: column;
  align-content: flex-end;
  justify-content: flex-end;
  list-style-type: none;
  z-index: 10;
  transition: transform 0.2s ease-in-out;
  ${(props) =>
    props.open
      ? "transform: translateY(0);"
      : "transform: translateY(calc(100% + 2em));"}

  header {
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    background: ${(props) => props.theme.colors.grey[7]};
    padding: 1.5em;
    width: 100%;
    align-items: center;

    svg {
      color: ${(props) => props.theme.colors[props.theme.accent][4]};
      height: 2.5em;
      width: 2.5em;
      cursor: pointer;
    }
  }
  div {
    padding: 1.5em;
  }

  li {
  }
`;

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <>
      <BurgerStyles
        name="Mobile navigation menu"
        aria-label="Mobile navigation menu button"
        open={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div />
        <div />
        <div />
      </BurgerStyles>
      <BackgroundCover open={isOpen} />
      <MobileNav>
        <MobileNavContent open={isOpen}>
          <header>
            <h2>Menu</h2>
            <AiFillCloseCircle
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </header>
          <Spacer vertical="2em">
            <li>
              <NavLinkButton to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLinkButton>
            </li>
            <li>
              <NavLinkButton to="/#about-me" onClick={() => setIsOpen(false)}>
                About me
              </NavLinkButton>
            </li>
            <li>
              <NavLinkButton to="/#projects" onClick={() => setIsOpen(false)}>
                Projects
              </NavLinkButton>
            </li>
            <li>
              <NavLinkButton to="/#contact-me" onClick={() => setIsOpen(false)}>
                Contact me
              </NavLinkButton>
            </li>
          </Spacer>
        </MobileNavContent>
      </MobileNav>
    </>
  );
};

export default Burger;
