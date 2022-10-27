import React, { useEffect } from "react";
import {
  NavbarStyled,
  NavbarButton,
  NavBarButtonsContainerStyled,
} from "./Navbar.styled";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const handleRefreshNewsClick = () => {};
  const handleRefreshCommentsClick = () => {};

  return (
    <NavbarStyled>
      <div>Hacker News</div>
      <NavBarButtonsContainerStyled>
        <Link to={"/"}>
          <NavbarButton>Go Home</NavbarButton>
        </Link>

        {location.pathname.includes("news") ? (
          <NavbarButton onClick={handleRefreshCommentsClick}>
            Refresh comments
          </NavbarButton>
        ) : (
          <NavbarButton onClick={handleRefreshNewsClick}>
            Refresh news
          </NavbarButton>
        )}
      </NavBarButtonsContainerStyled>
    </NavbarStyled>
  );
};
