import React from "react";
import styled from "styled-components";

import Burger from "./Burger";

import { ButtonStyles, LinkButton } from "./Button";

const MobileNav = styled.div`
  @media ${(props) => props.theme.breakpoints[1]} {
    display: none;
  }
`;

const DesktopHomeButton = styled.a`
  ${ButtonStyles}
`;

const DesktopNav = styled.nav`
  display: none;

  @media ${(props) => props.theme.breakpoints[1]} {
    display: inline;
    position: fixed;
    z-index: 99;
    width: 100%;
    padding: 2em 1.5em;

    div {
      width: 45em;
      margin: 0 auto;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      span {
        font-family: ${(props) => props.theme.typography.headings};
        font-weight: 700;
        font-size: 1.5em;
      }

      ul {
        list-style-type: none;
        li {
          display: inline;

          a {
            margin-left: 2em;
          }
        }
      }
    }
  }

  @media ${(props) => props.theme.breakpoints[2]} {
    div {
      width: 60em;
    }
  }
`;

const Navbar = ({ isBlog }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <DesktopNav>
        <div>
          <ul>
            <li>
              {isBlog ? (
                <LinkButton href="/">Home</LinkButton>
              ) : (
                <DesktopHomeButton
                  tabIndex="0"
                  onClick={() => window.scrollTo(0, 0)}
                  onKeyDown={handleKeyDown}
                >
                  Home
                </DesktopHomeButton>
              )}
            </li>
            <li>
              <LinkButton href="#about-me">About me</LinkButton>
            </li>
            <li>
              <LinkButton href="#projects">Projects</LinkButton>
            </li>
            <li>
              <LinkButton href="#contact-me">Contact me</LinkButton>
            </li>
          </ul>
        </div>
      </DesktopNav>

      <MobileNav>
        <Burger />
      </MobileNav>
    </>
  );
};

export default Navbar;
