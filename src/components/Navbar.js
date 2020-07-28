import React from "react";
import styled from "styled-components";

import Burger from "./Burger";
import Spacer from "./Spacer";

import { LinkButton } from "./Button";

const MobileNav = styled.div``;

const DesktopNav = styled.nav`
  position: fixed;
  z-index: 99;
  width: 100%;
  padding: 2em 1.5em;
  background: ${(props) => props.theme.colors.grey[7]};
  opacity: 0.5;

  div {
    width: 60em;
    margin: 0 auto;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`;

const Navbar = ({ isBlog }) => {
  return (
    <>
      <DesktopNav>
        <div>
          <span>Connor Dowson</span>
          <ul>
            <li>
              {isBlog ? (
                <LinkButton href="/">Home</LinkButton>
              ) : (
                <LinkButton>Home</LinkButton>
              )}
            </li>
            <li>
              <LinkButton href="#about-me">About me</LinkButton>
            </li>
            <li>
              <LinkButton href="projects">Projects</LinkButton>
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
