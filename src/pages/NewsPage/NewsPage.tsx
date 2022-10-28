import React, { useEffect } from "react";
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
  NewsPageParentCommentContainerStyled,
} from "./NewsPage.styled";
import { useGetSpecificNewsInfo } from "../../utils/useGetSpecificNewsInfo";
import { useAppSelector } from "../../store/hooks";
import { selectCurrentNewsInfo } from "../../store/newsSlice";
import { selectCurrentNewsCommentsArray } from "../../store/newsSlice";
import { useGetComment } from "../../utils/useGetComment";

const newsID = 8863;

export const NewsPage = () => {
  const params = useParams();

  const [getNewsWithComments] = useGetSpecificNewsInfo();
  const [getComment] = useGetComment();

  useEffect(() => {
    getNewsWithComments(newsID);
  }, []);

  //Number(params.id)

  const selectCurrentNews = useAppSelector(selectCurrentNewsInfo);
  const selectCurrentParentComments = useAppSelector(
    selectCurrentNewsCommentsArray
  );

  const comments = selectCurrentParentComments.filter((comment) => {
    return comment.parent === newsID;
  });

  const handleClickOnComment = (commentsID: number[]) => {
    commentsID.forEach((id: number) => {
      getComment(id);
    });
  };

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
        {comments.map((comment) =>
          !comment.text ? (
            ""
          ) : (
            <NewsPageParentCommentContainerStyled>
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

                {comment.kids && comment.kids.length > 0 && (
                  <p>
                    | this comment has {comment.kids.length} child comments.{" "}
                    <button onClick={() => handleClickOnComment(comment.kids)}>
                      Click to see them
                    </button>
                  </p>
                )}
              </NewsPageCommentTitleStyled>

              <NewsPageCommentBodyStyled>
                {comment.text}
                <div>
                  {selectCurrentParentComments
                    .filter((comment2) => {
                      return comment2.parent === comment.id;
                    })
                    .map((comment2) => (
                      <div>{comment2.by}</div>
                    ))}
                </div>
              </NewsPageCommentBodyStyled>
            </NewsPageParentCommentContainerStyled>
          )
        )}
      </NewsPageCommentSectionStyled>
    </>
  );
};
