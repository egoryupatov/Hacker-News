import React from "react";
import { useAppSelector } from "../../store/hooks";
import { selectDetailedNewsInfo } from "../../store/newsSlice";
import { useGetDetailedNewsInfo } from "../../utils/useGetDetailedNewsInfo";
import {
  NewsInfoStyled,
  NewsTitleStyled,
  NewsContainerStyled,
} from "./News.styled";
import { Link } from "react-router-dom";

export const News = () => {
  useGetDetailedNewsInfo();
  const detailedNewsInfo = useAppSelector(selectDetailedNewsInfo);

  return (
    <>
      {detailedNewsInfo.map((news, i) => (
        <NewsContainerStyled>
          <NewsTitleStyled>
            {i + 1 + "."}
            <Link to={`/news/${news.id}`}>{news.title}</Link>
          </NewsTitleStyled>
          <NewsInfoStyled>
            <p>{news.score} points</p>
            <p>by {news.by}</p>
            qq
            <p>
              {new Date(news.time * 1000).getMinutes() > 60
                ? Math.floor(new Date(news.time * 1000).getMinutes() / 60) +
                  " hours ago"
                : new Date(news.time * 1000).getMinutes() + " minutes ago"}
            </p>
            <p>| {news.descendants} comments</p>
          </NewsInfoStyled>
        </NewsContainerStyled>
      ))}
    </>
  );
};
