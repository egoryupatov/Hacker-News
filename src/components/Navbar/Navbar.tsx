import React from "react";
import {
  NavbarButtonsContainerStyled,
  NavbarContainerStyled,
} from "./NavbarContainerStyled";
import { Link, Location } from "react-router-dom";
import { ButtonStyled } from "../../styles/general.styled";

export interface NavbarProps {
  handleRefreshCommentsClick: () => void;
  handleRefreshNewsClick: () => void;
  location: Location;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <NavbarContainerStyled>
      <div>Hacker News</div>
      <NavbarButtonsContainerStyled>
        <Link to={"/"}>
          <ButtonStyled>Go home</ButtonStyled>
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
      </NavbarButtonsContainerStyled>
    </NavbarContainerStyled>
  );
};
