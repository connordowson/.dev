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
  background-color: tomato;
  /* padding: 2rem; */
`;

const Navbar = ({ isBlog }: Props) => {
  return (
    <NavbarWrapper>
      {isBlog ? (
        <a href="/">Home</a>
      ) : (
        <ul>
          <Spacer horizontal={"10em"}>
            <a href="/projects">Projects</a>
            <a href="/blog"> Blog </a>
          </Spacer>
        </ul>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
