import React from "react";
import { NavBarButtonsContainerStyled, NavbarStyled } from "./Navbar.styled";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../../styles/general.styled";

export const Navbar = (props: any) => {
  return (
    <NavbarStyled>
      <div>Hacker News</div>
      <NavBarButtonsContainerStyled>
        <Link to={"/"}>
          <ButtonStyled>Go Home</ButtonStyled>
        </Link>

        {props.location.pathname.includes("news") ? (
          <ButtonStyled onClick={props.handleRefreshCommentsClick}>
            Refresh comments
          </ButtonStyled>
        ) : (
          <ButtonStyled onClick={props.handleRefreshNewsClick}>
            Refresh news
          </ButtonStyled>
        )}
      </NavBarButtonsContainerStyled>
    </NavbarStyled>
  );
};
