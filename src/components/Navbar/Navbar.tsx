import React, { useEffect } from "react";
import { NavbarStyled } from "./Navbar.styled";
import { NavbarButton } from "./Navbar.styled";

export const Navbar = () => {
  const handleRefreshClick = () => {};

  return (
    <NavbarStyled>
      <div>Hacker News</div>
      <NavbarButton onClick={handleRefreshClick}>Refresh news</NavbarButton>
    </NavbarStyled>
  );
};
