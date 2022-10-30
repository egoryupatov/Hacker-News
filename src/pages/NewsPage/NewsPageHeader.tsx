import React from "react";
import {
  NewsPageDescriptionStyled,
  NewsPageTitleStyled,
  TitleURLStyled,
  NewsPageHeaderStyled,
} from "./NewsPage.styled";
import { getShortURL } from "../../utils/getShortURL";
import { CurrentNews } from "../../store/newsSlice";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { ParentNewsTextStyled, NewsPageInfoStyled } from "./NewsPage.styled";

interface NewsPageHeaderProps {
  selectCurrentNews: CurrentNews;
}

export const NewsPageHeader: React.FC<NewsPageHeaderProps> = (props) => {
  return (
    <NewsPageHeaderStyled>
      <NewsPageTitleStyled>
        {props.selectCurrentNews.title}

        <TitleURLStyled>
          {props.selectCurrentNews.url ? (
            <a href={props.selectCurrentNews.url}>
              ({getShortURL(props.selectCurrentNews.url)})
            </a>
          ) : (
            ""
          )}
        </TitleURLStyled>
      </NewsPageTitleStyled>

      <NewsPageDescriptionStyled>
        <NewsPageInfoStyled>
          <p>
            {props.selectCurrentNews.score} point
            {props.selectCurrentNews.score > 1 ? "s" : ""}
          </p>
          <p>by {props.selectCurrentNews.by}</p>
          <p>{getTimeAgo(props.selectCurrentNews.time)}</p>
          <p>| {props.selectCurrentNews.descendants} comments</p>
        </NewsPageInfoStyled>
        <ParentNewsTextStyled>
          {props.selectCurrentNews.text ? (
            <div
              dangerouslySetInnerHTML={{ __html: props.selectCurrentNews.text }}
            ></div>
          ) : (
            ""
          )}
        </ParentNewsTextStyled>
      </NewsPageDescriptionStyled>
    </NewsPageHeaderStyled>
  );
};
