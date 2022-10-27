import React, { useEffect } from "react";
import {
  NavbarStyled,
  NavbarButton,
  NavBarButtonsContainerStyled,
} from "./Navbar.styled";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const handleRefreshClick = () => {};

  return (
    <NavbarStyled>
      <div>Hacker News</div>
      <NavBarButtonsContainerStyled>
        <Link to={"/"}>
          <NavbarButton>Go Home</NavbarButton>
        </Link>
        <NavbarButton onClick={handleRefreshClick}>Refresh news</NavbarButton>
      </NavBarButtonsContainerStyled>
    </NavbarStyled>
  );
};
