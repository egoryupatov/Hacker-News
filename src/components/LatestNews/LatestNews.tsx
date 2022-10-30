import React from "react";
import {
  LatestNewsContainerStyled,
  LatestNewsBodyStyled,
  LatestNewsTitleStyled,
} from "./LatestNews.styled";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { PostInfo } from "../../store/newsSlice";

export interface LatestNewsProps {
  areNewsLoaded: boolean;
  detailedNewsInfo: PostInfo[];
}

export const LatestNews: React.FC<LatestNewsProps> = (props) => {
  return (
    <>
      {props.areNewsLoaded ? (
        props.detailedNewsInfo.map((news: PostInfo, i: number) => (
          <LatestNewsContainerStyled key={news.id}>
            <LatestNewsTitleStyled>
              {i + 1 + "."}
              <Link to={`/news/${news.id}`}>{news.title}</Link>
            </LatestNewsTitleStyled>
            <LatestNewsBodyStyled>
              <p>{news.score} points</p>
              <p>by {news.by}</p>
              <p>{getTimeAgo(news.time)}</p>
              <p>
                |{" "}
                <Link to={`/news/${news.id}`}>{news.descendants} comments</Link>
              </p>
            </LatestNewsBodyStyled>
          </LatestNewsContainerStyled>
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
};
