import React from "react";
import {
  NewsContainerStyled,
  NewsInfoStyled,
  NewsTitleStyled,
} from "./News.styled";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { getTimeAgo } from "../../utils/getTimeAgo";

export const LatestNews = (props: any) => {
  return (
    <>
      {props.areNewsLoaded ? (
        props.detailedNewsInfo.map((news: any, i: number) => (
          <NewsContainerStyled key={news.id}>
            <NewsTitleStyled>
              {i + 1 + "."}
              <Link to={`/news/${news.id}`}>{news.title}</Link>
            </NewsTitleStyled>
            <NewsInfoStyled>
              <p>{news.score} points</p>
              <p>by {news.by}</p>
              <p>{getTimeAgo(news.time)}</p>
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
