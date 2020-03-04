import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Spacer from "./Spacer";

type Props = {
  isBlog: boolean;
};

const NavbarWrapper = styled.nav`
  width: 100vw;
  font-family: "Segoe UI";
  background-color: ${props => props.theme.colors.grey800};
  color: ${props => props.theme.colors.grey100};
  padding: 2rem;
  position: sticky;
`;

const NavbarContents = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbarlinks = styled(Spacer)`
  a {
    color: ${props => props.theme.colors.grey100};
    text-decoration: none;
  }
`;

const MobileNav = styled.div``;

const Hamburger = styled.div`
  width: 3rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    height: 0.5rem;
    border-radius: 0.25rem;
    width: 100%;
    background: white;
  }
`;

const Navbar = ({ isBlog }: Props) => {
  return (
    <NavbarWrapper>
      <NavbarContents>
        <p>Connor Dowson</p>
        {/* {isBlog ? (
          <a href="/">Home</a>
        ) : (
          <ul>
            <Navbarlinks horizontal={"2.5rem"}>
              <a href="/projects">Projects</a>
              <a href="/blog"> Blog </a>
            </Navbarlinks>
          </ul>
        )} */}

        <Hamburger>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </NavbarContents>
    </NavbarWrapper>
  );
};

export default Navbar;
