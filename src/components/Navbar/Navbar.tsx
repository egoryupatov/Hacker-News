import React, { useEffect } from "react";
import { NavbarStyled, NavBarButtonsContainerStyled } from "./Navbar.styled";
import { ButtonStyled } from "../../styles/general.styled";
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
          <ButtonStyled>Go Home</ButtonStyled>
        </Link>

        {location.pathname.includes("news") ? (
          <ButtonStyled onClick={handleRefreshCommentsClick}>
            Refresh comments
          </ButtonStyled>
        ) : (
          <ButtonStyled onClick={handleRefreshNewsClick}>
            Refresh news
          </ButtonStyled>
        )}
      </NavBarButtonsContainerStyled>
    </NavbarStyled>
  );
};
