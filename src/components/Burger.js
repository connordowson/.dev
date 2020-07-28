import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTransition, animated, config } from "react-spring";
import { AiFillCloseCircle } from "react-icons/ai";

import Spacer from "./Spacer";
import { ButtonStyles } from "./Button";

const BurgerStyles = styled(animated.button)`
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
  flex-direction: column;
  justify-content: center;
  grid-gap: 0.5em;
  align-items: center;
  z-index: 11;
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 0.063em 0.313em 0 rgba(0,0,0,.07), 0 0.438em 1.063em 0 rgba(0,0,0,.1);

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.grey[1]};
    outline-offset: 2px;
    -moz-outline-radius: 100%;
/* 
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.grey[7]},
      0 0 0 4px ${(props) => props.theme.colors.grey[1]}; */
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
  z-index: 10;
  scroll-behavior: none;
  padding: 1em;
`;

const NavLinkButton = styled.a`
  ${ButtonStyles}
  width: 100%;
`;

const BackgroundCover = styled(animated.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.grey[8]};
  top: 0;
  left: 0;
  z-index: 9;
`;

const MobileNavContent = styled(animated.ul)`
  position: absolute;
  width: calc(100% - 2em);
  border-top: 0.5em solid
    ${(props) => props.theme.colors[props.theme.accent][4]};
  border-radius: 0.25em;
  background: ${(props) => props.theme.colors.grey[6]};
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: flex-end;
  list-style-type: none;
  z-index: 10;

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

  const animationConfig = { mass: 10, tension: 600, friction: 10, clamp: true };
  const slideTransitions = useTransition(isOpen, null, {
    config: animationConfig,
    from: { bottom: "-50vh" },
    enter: { bottom: "2em" },
    leave: { bottom: "-50vh" },
  });

  const fadeInTransitions = useTransition(isOpen, null, {
    config: animationConfig,
    from: { opacity: 0 },
    enter: { opacity: 0.9 },
    leave: { opacity: 0 },
  });

  const burgerTransitions = useTransition(isOpen, null, {
    config: animationConfig,
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <>
      {burgerTransitions.map(
        ({ item, key, props }) =>
          !item && (
            <BurgerStyles
              style={props}
              onClick={() => {
                setIsOpen(!isOpen);
                console.log(isOpen);
              }}
            >
              <div />
              <div />
              <div />
            </BurgerStyles>
          )
      )}

      {fadeInTransitions.map(
        ({ item, key, props }) => item && <BackgroundCover style={props} />
      )}

      {slideTransitions.map(
        ({ item, key, props }) =>
          item && (
            <MobileNav>
              <MobileNavContent key={key} style={props}>
                <header>
                  <h2>Menu</h2>
                  <AiFillCloseCircle onClick={() => setIsOpen(false)} />
                </header>
                <Spacer vertical="2em">
                  <li>
                    <NavLinkButton
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Home
                    </NavLinkButton>
                  </li>
                  <li>
                    <NavLinkButton
                      href="#about-me"
                      onClick={() => setIsOpen(false)}
                    >
                      About me
                    </NavLinkButton>
                  </li>
                  <li>
                    <NavLinkButton
                      href="#projects"
                      onClick={() => setIsOpen(false)}
                    >
                      Projects
                    </NavLinkButton>
                  </li>
                  <li>
                    <NavLinkButton
                      href="#contact-me"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact me
                    </NavLinkButton>
                  </li>
                </Spacer>
              </MobileNavContent>
            </MobileNav>
          )
      )}
    </>
  );
};

export default Burger;
