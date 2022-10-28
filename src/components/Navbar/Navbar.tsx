import React from "react";
import { NavbarStyled, NavBarButtonsContainerStyled } from "./Navbar.styled";
import { ButtonStyled } from "../../styles/general.styled";
import { Link, useLocation } from "react-router-dom";
import { useGetDetailedNewsInfo } from "../../utils/useGetDetailedNewsInfo";
import { useDispatch } from "react-redux";
import { setAreCommentsLoaded, setAreNewsLoaded } from "../../store/newsSlice";
import { useGetSpecificNewsInfo } from "../../utils/useGetSpecificNewsInfo";
import { useGetComment } from "../../utils/useGetComment";

const newsID = 33360171;

export const Navbar = () => {
  const dispatch = useDispatch();
  const [getNews] = useGetDetailedNewsInfo();
  const [getNewsWithComments] = useGetSpecificNewsInfo();

  const location = useLocation();
  const handleRefreshNewsClick = () => {
    getNews();
    dispatch(setAreNewsLoaded(false));
  };
  const handleRefreshCommentsClick = () => {
    getNewsWithComments(newsID);
    dispatch(setAreCommentsLoaded(false));
  };

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
