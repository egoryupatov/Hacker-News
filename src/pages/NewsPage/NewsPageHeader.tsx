import React from "react";
import {
  NewsPageInfoStyled,
  NewsPageTitleStyled,
  NewsPageTitleURLStyled,
  TitleSectionStyled,
} from "./NewsPage.styled";

export const NewsPageHeader = (props: any) => {
  return (
    <TitleSectionStyled>
      <NewsPageTitleStyled>
        {props.selectCurrentNews.title}

        <NewsPageTitleURLStyled>
          (
          <a href={props.selectCurrentNews.url}>
            {props.selectCurrentNews.url}
          </a>
          )
        </NewsPageTitleURLStyled>
      </NewsPageTitleStyled>
      <NewsPageInfoStyled>
        <p>{props.selectCurrentNews.score} points</p>
        <p>by {props.selectCurrentNews.by}</p>
        <p>
          {new Date(props.selectCurrentNews.time * 1000).getMinutes() > 60
            ? Math.floor(
                new Date(props.selectCurrentNews.time * 1000).getMinutes() / 60
              ) + " hours ago"
            : new Date(props.selectCurrentNews.time * 1000).getMinutes() +
              " minutes ago"}
        </p>
        <p>| {props.selectCurrentNews.descendants} comments</p>
      </NewsPageInfoStyled>
    </TitleSectionStyled>
  );
};
