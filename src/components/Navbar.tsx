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
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Navbarlinks = styled(Spacer)`
  a {
    color: ${props => props.theme.colors.grey100};
    text-decoration: none;
  }
`;

const Navbar = ({ isBlog }: Props) => {
  return (
    <NavbarWrapper>
      <NavbarContents>
        <p>Connor Dowson</p>
        {isBlog ? (
          <a href="/">Home</a>
        ) : (
          <ul>
            <Navbarlinks horizontal={"2.5rem"}>
              <a href="/projects">Projects</a>
              <a href="/blog"> Blog </a>
            </Navbarlinks>
          </ul>
        )}
      </NavbarContents>
    </NavbarWrapper>
  );
};

export default Navbar;
