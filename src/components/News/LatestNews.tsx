import React from "react";
import { useAppSelector } from "../../store/hooks";
import {
  selectAreNewsLoaded,
  selectDetailedNewsInfo,
} from "../../store/newsSlice";
import { useGetDetailedNewsInfo } from "../../utils/useGetDetailedNewsInfo";
import {
  NewsInfoStyled,
  NewsTitleStyled,
  NewsContainerStyled,
} from "./News.styled";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { useEffect } from "react";

export const LatestNews = () => {
  const [getNews] = useGetDetailedNewsInfo();

  useEffect(() => {
    getNews();
  }, []);

  const detailedNewsInfo = useAppSelector(selectDetailedNewsInfo);
  const areNewsLoaded = useAppSelector(selectAreNewsLoaded);

  return (
    <>
      {areNewsLoaded ? (
        detailedNewsInfo.map((news, i) => (
          <NewsContainerStyled key={news.id}>
            <NewsTitleStyled>
              {i + 1 + "."}
              <Link to={`/news/${news.id}`}>{news.title}</Link>
            </NewsTitleStyled>
            <NewsInfoStyled>
              <p>{news.score} points</p>
              <p>by {news.by}</p>
              <p>
                {new Date(news.time * 1000).getMinutes() > 60
                  ? Math.floor(new Date(news.time * 1000).getMinutes() / 60) +
                    " hours ago"
                  : new Date(news.time * 1000).getMinutes() + " minutes ago"}
              </p>
              <p>
                |{" "}
                <Link to={`/news/${news.id}`}>{news.descendants} comments</Link>
              </p>
            </NewsInfoStyled>
          </NewsContainerStyled>
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
};
