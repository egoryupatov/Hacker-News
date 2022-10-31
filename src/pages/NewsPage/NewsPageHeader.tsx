import React from "react";
import {
  NewsPageDescriptionStyled,
  NewsPageTitleStyled,
  TitleURLStyled,
  NewsPageHeaderStyled,
} from "./NewsPage.styled";
import { getShortURL } from "../../utils/getShortURL";
import { News } from "../../store/newsSlice";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { ParentNewsTextStyled, NewsPageInfoStyled } from "./NewsPage.styled";

export interface NewsPageHeaderProps {
  currentNews: News;
}

export const NewsPageHeader: React.FC<NewsPageHeaderProps> = (props) => {
  return (
    <NewsPageHeaderStyled>
      <NewsPageTitleStyled>
        {props.currentNews.title}

        <TitleURLStyled>
          {props.currentNews.url ? (
            <a href={props.currentNews.url}>
              ({getShortURL(props.currentNews.url)})
            </a>
          ) : (
            ""
          )}
        </TitleURLStyled>
      </NewsPageTitleStyled>

      <NewsPageDescriptionStyled>
        <NewsPageInfoStyled>
          <p>
            {props.currentNews.score} point
            {props.currentNews.score > 1 ? "s" : ""}
          </p>
          <p>by {props.currentNews.by}</p>
          <p>{getTimeAgo(props.currentNews.time)}</p>
          <p>| {props.currentNews.descendants} comments</p>
        </NewsPageInfoStyled>
        <ParentNewsTextStyled>
          {props.currentNews.text ? (
            <div
              dangerouslySetInnerHTML={{ __html: props.currentNews.text }}
            ></div>
          ) : (
            ""
          )}
        </ParentNewsTextStyled>
      </NewsPageDescriptionStyled>
    </NewsPageHeaderStyled>
  );
};
