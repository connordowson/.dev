import React from "react";
import styled from "styled-components";

import Burger from "./Burger";

import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ButtonStyles, LinkButton } from "./Button";

const MobileNav = styled.div`
  @media ${(props) => props.theme.breakpoints[1]} {
    display: none;
  }
`;

const DesktopHomeButton = styled(Link)`
  ${ButtonStyles}
`;

const DesktopNavButton = styled(AnchorLink)`
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
  return (
    <>
      <DesktopNav>
        <div>
          <ul>
            <li>
              <DesktopHomeButton to="/">Home</DesktopHomeButton>
            </li>
            <li>
              <DesktopNavButton to="/#about-me">About me</DesktopNavButton>
            </li>
            <li>
              <DesktopNavButton to="/#projects">Projects</DesktopNavButton>
            </li>
            <li>
              <DesktopNavButton to="/#contact-me">Contact me</DesktopNavButton>
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
