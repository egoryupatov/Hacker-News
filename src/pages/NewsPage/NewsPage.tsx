import React from "react";
import { useParams } from "react-router-dom";
import {
  NewsPageContainerStyled,
  NewsPageInfoStyled,
  NewsPageTitleStyled,
  NewsPageTitleURLStyled,
  NewsPageCommentSectionStyled,
  NewsPageChildCommentContainerStyled,
  NewsPageCommentTitleStyled,
  NewsPageCommentBodyStyled,
} from "./NewsPage.styled";
import { useGetSpecificNewsInfo } from "../../utils/useGetSpecificNewsInfo";
import { useAppSelector } from "../../store/hooks";
import {
  selectCurrentNewsInfo,
  selectCurrentNewsParentComments,
} from "../../store/newsSlice";
import { NewsContainerStyled } from "../../components/News/News.styled";

export const NewsPage = () => {
  const params = useParams();

  //не забыть потом поменять обратно на парамс ид

  useGetSpecificNewsInfo(33349296);

  const selectCurrentNews = useAppSelector(selectCurrentNewsInfo);
  const selectCurrentParentComments = useAppSelector(
    selectCurrentNewsParentComments
  );

  return (
    <>
      <NewsPageContainerStyled>
        <NewsPageTitleStyled>
          {selectCurrentNews.title}
          <NewsPageInfoStyled>
            <NewsPageTitleURLStyled>
              (<a href={selectCurrentNews.url}>{selectCurrentNews.url}</a>)
            </NewsPageTitleURLStyled>
          </NewsPageInfoStyled>
        </NewsPageTitleStyled>
        <NewsPageInfoStyled>
          <p>{selectCurrentNews.score} points</p>
          <p>by {selectCurrentNews.by}</p>
          <p>
            {new Date(selectCurrentNews.time * 1000).getMinutes() > 60
              ? Math.floor(
                  new Date(selectCurrentNews.time * 1000).getMinutes() / 60
                ) + " hours ago"
              : new Date(selectCurrentNews.time * 1000).getMinutes() +
                " minutes ago"}
          </p>
          <p>| {selectCurrentNews.descendants} comments</p>
        </NewsPageInfoStyled>
      </NewsPageContainerStyled>

      <NewsPageCommentSectionStyled>
        {selectCurrentParentComments.map((comment) =>
          !comment.text ? (
            ""
          ) : (
            <NewsPageChildCommentContainerStyled>
              <NewsPageCommentTitleStyled>
                <p>{comment.by}</p>
                <p>
                  {new Date(comment.time * 1000).getMinutes() > 60
                    ? Math.floor(
                        new Date(comment.time * 1000).getMinutes() / 60
                      ) + " hours ago"
                    : new Date(comment.time * 1000).getMinutes() +
                      " minutes ago"}
                </p>
              </NewsPageCommentTitleStyled>

              <NewsPageCommentBodyStyled>
                {comment.text}
              </NewsPageCommentBodyStyled>
            </NewsPageChildCommentContainerStyled>
          )
        )}
      </NewsPageCommentSectionStyled>
    </>
  );
};
