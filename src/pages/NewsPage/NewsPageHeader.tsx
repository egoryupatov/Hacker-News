import React from "react";
import {
  NewsPageDescriptionStyled,
  NewsPageTitleStyled,
  NewsPageTitleURLStyled,
  NewsPageHeaderStyled,
} from "./NewsPage.styled";
import { getShortURL } from "../../utils/getShortURL";
import { CurrentNews } from "../../store/newsSlice";
import { getTimeAgo } from "../../utils/getTimeAgo";

interface NewsPageHeaderProps {
  selectCurrentNews: CurrentNews;
}

export const NewsPageHeader: React.FC<NewsPageHeaderProps> = (props) => {
  return (
    <NewsPageHeaderStyled>
      <NewsPageTitleStyled>
        {props.selectCurrentNews.title}

        <NewsPageTitleURLStyled>
          (
          <a href={props.selectCurrentNews.url}>
            {getShortURL(props.selectCurrentNews.url)}
          </a>
          )
        </NewsPageTitleURLStyled>
      </NewsPageTitleStyled>

      <NewsPageDescriptionStyled>
        <p>{props.selectCurrentNews.score} points</p>
        <p>by {props.selectCurrentNews.by}</p>
        <p>{getTimeAgo(props.selectCurrentNews.time)}</p>
        <p>| {props.selectCurrentNews.descendants} comments</p>
      </NewsPageDescriptionStyled>
    </NewsPageHeaderStyled>
  );
};
