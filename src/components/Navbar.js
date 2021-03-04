import React from "react";
import styled from "styled-components";

import Burger from "./Burger";

import { Link } from "gatsby";
import { ButtonStyles } from "./Button";

const MobileNav = styled.div`
  @media ${(props) => props.theme.breakpoints[1]} {
    display: none;
  }
`;

const DesktopNavButton = styled(Link)`
  ${ButtonStyles}
`;

const DesktopNav = styled.nav`
  display: none;
  pointer-events: none;

  @media ${(props) => props.theme.breakpoints[1]} {
    display: inline-block;
    position: sticky;
    top: 0;
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
      justify-content: space-between;

      span {
        display: flex;
        font-family: ${(props) => props.theme.typography.headings};
        font-weight: 700;
        font-size: 1.5em;
        background: ${(props) => props.theme.colors[props.theme.accent][2]};
        color: ${(props) => props.theme.colors[props.theme.accent][8]};
        height: 2em;
        width: 2em;
        padding: 0.5em;
        align-items: center;
        justify-content: center;
        border-radius: 1em;
        ${(props) => props.theme.shadows[2]}
      }

      ul {
        list-style-type: none;
        li {
          display: inline;

          a {
            margin-left: 2em;
            pointer-events: auto;
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

const Navbar = ({ links }) => {
  return (
    <>
      <DesktopNav>
        <div>
          <span>CD</span>

          <ul>
            {links.map((link) => (
              <li>
                <DesktopNavButton to={link.link} data-button>
                  {link.name}
                </DesktopNavButton>
              </li>
            ))}
          </ul>
        </div>
      </DesktopNav>

      <MobileNav>
        <Burger links={links} />
      </MobileNav>
    </>
  );
};

export default Navbar;
