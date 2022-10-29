import React from "react";
import { useAppSelector } from "../../store/hooks";
import {
  selectAreNewsLoaded,
  selectDetailedNewsInfo,
} from "../../store/newsSlice";
import { useGetNews } from "../../utils/useGetNews";
import {
  NewsInfoStyled,
  NewsTitleStyled,
  NewsContainerStyled,
} from "./News.styled";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { useEffect } from "react";
import { LatestNews } from "./LatestNews";

export const LatestNewsContainer = () => {
  const [getNews] = useGetNews();

  useEffect(() => {
    getNews();
  }, []);

  const detailedNewsInfo = useAppSelector(selectDetailedNewsInfo);
  const areNewsLoaded = useAppSelector(selectAreNewsLoaded);

  return (
    <LatestNews
      areNewsLoaded={areNewsLoaded}
      detailedNewsInfo={detailedNewsInfo}
    />
  );
};
