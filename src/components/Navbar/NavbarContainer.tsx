import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGetNews } from "../../utils/useGetNews";
import { useDispatch } from "react-redux";
import { setAreCommentsLoaded, setAreNewsLoaded } from "../../store/newsSlice";
import { useGetSpecificNewsInfo } from "../../utils/useGetSpecificNewsInfo";
import { Navbar } from "./Navbar";

export const NavbarContainer: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [getNews] = useGetNews();
  const [getNewsWithComments] = useGetSpecificNewsInfo();

  const location = useLocation();

  const handleRefreshNewsClick = () => {
    getNews();
    dispatch(setAreNewsLoaded(false));
  };

  const handleRefreshCommentsClick = () => {
    dispatch(setAreCommentsLoaded(false));
    getNewsWithComments(Number(params.id));
  };

  return (
    <Navbar
      handleRefreshCommentsClick={handleRefreshCommentsClick}
      handleRefreshNewsClick={handleRefreshNewsClick}
      location={location}
    />
  );
};
