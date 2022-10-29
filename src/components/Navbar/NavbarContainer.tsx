import React from "react";
import { useLocation } from "react-router-dom";
import { useGetNews } from "../../utils/useGetNews";
import { useDispatch } from "react-redux";
import { setAreCommentsLoaded, setAreNewsLoaded } from "../../store/newsSlice";
import { useGetSpecificNewsInfo } from "../../utils/useGetSpecificNewsInfo";
import { Navbar } from "./Navbar";

const newsID = 33360171;

export const NavbarContainer = () => {
  const dispatch = useDispatch();
  const [getNews] = useGetNews();
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
    <Navbar
      handleRefreshCommentsClick={handleRefreshCommentsClick}
      handleRefreshNewsClick={handleRefreshNewsClick}
      location={location}
    />
  );
};
