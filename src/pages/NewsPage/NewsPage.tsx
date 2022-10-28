import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  NewsPageContainerStyled,
  NewsPageInfoStyled,
  NewsPageTitleStyled,
  NewsPageTitleURLStyled,
  NewsPageCommentSectionStyled,
  CommentTitleStyled,
  CommentBodyStyled,
  NewsPageParentCommentContainerStyled,
} from "./NewsPage.styled";
import { useGetSpecificNewsInfo } from "../../utils/useGetSpecificNewsInfo";
import { useAppSelector } from "../../store/hooks";
import {
  selectAreCommentsLoaded,
  selectCurrentNewsInfo,
  setAreCommentsLoaded,
} from "../../store/newsSlice";
import { selectCurrentNewsCommentsArray } from "../../store/newsSlice";
import { useGetComment } from "../../utils/useGetComment";
import { ChildCommentStyled } from "./NewsPage.styled";
import { Spinner } from "../../components/Spinner/Spinner";

const newsID = 33360171;

export const NewsPage = () => {
  const areCommentsLoaded = useAppSelector(selectAreCommentsLoaded);
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
      {areCommentsLoaded ? (
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
                  <CommentTitleStyled>
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
                        | this comment has{" "}
                        <span
                          onClick={() => handleClickOnComment(comment.kids)}
                        >
                          {comment.kids.length} child comment
                          {comment.kids.length > 1 ? "s" : ""} ▼
                        </span>
                      </p>
                    )}
                  </CommentTitleStyled>

                  <CommentBodyStyled>{comment.text}</CommentBodyStyled>

                  <ChildCommentStyled>
                    {selectCurrentParentComments
                      .filter((comment2) => {
                        return comment2.parent === comment.id;
                      })
                      .map((comment2) => (
                        <>
                          <CommentTitleStyled>
                            <p>▲ {comment2.by}</p>
                            <p>
                              {new Date(comment2.time * 1000).getMinutes() > 60
                                ? Math.floor(
                                    new Date(
                                      comment2.time * 1000
                                    ).getMinutes() / 60
                                  ) + " hours ago"
                                : new Date(comment2.time * 1000).getMinutes() +
                                  " minutes ago"}
                            </p>
                          </CommentTitleStyled>
                          <CommentBodyStyled>
                            <p>{comment2.text}</p>
                          </CommentBodyStyled>
                        </>
                      ))}
                  </ChildCommentStyled>
                </NewsPageParentCommentContainerStyled>
              )
            )}
          </NewsPageCommentSectionStyled>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};
