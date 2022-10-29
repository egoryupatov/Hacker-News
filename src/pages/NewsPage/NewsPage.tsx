import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  TitleSectionStyled,
  NewsPageInfoStyled,
  NewsPageTitleStyled,
  NewsPageTitleURLStyled,
  CommentSectionStyled,
  CommentTitleStyled,
  CommentBodyStyled,
  ParentCommentContainerStyled,
} from "./NewsPage.styled";
import { useGetSpecificNewsInfo } from "../../utils/useGetSpecificNewsInfo";
import { useAppSelector } from "../../store/hooks";
import {
  selectAreCommentsLoaded,
  selectCurrentNewsInfo,
} from "../../store/newsSlice";
import { selectCurrentNewsCommentsArray } from "../../store/newsSlice";
import { useGetComment } from "../../utils/useGetComment";
import { ChildCommentContainerStyled } from "./NewsPage.styled";
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

  const parentComments = selectCurrentParentComments.filter((comment) => {
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
          <TitleSectionStyled>
            <NewsPageTitleStyled>
              {selectCurrentNews.title}

              <NewsPageTitleURLStyled>
                (<a href={selectCurrentNews.url}>{selectCurrentNews.url}</a>)
              </NewsPageTitleURLStyled>
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
          </TitleSectionStyled>

          <CommentSectionStyled>
            {parentComments.map((parentComment) =>
              !parentComment.text ? (
                ""
              ) : (
                <ParentCommentContainerStyled>
                  <CommentTitleStyled>
                    <p>{parentComment.by}</p>
                    <p>
                      {new Date(parentComment.time * 1000).getMinutes() > 60
                        ? Math.floor(
                            new Date(parentComment.time * 1000).getMinutes() /
                              60
                          ) + " hours ago"
                        : new Date(parentComment.time * 1000).getMinutes() +
                          " minutes ago"}
                    </p>

                    {parentComment.kids && parentComment.kids.length > 0 && (
                      <p>
                        | this comment has{" "}
                        <span
                          onClick={() =>
                            handleClickOnComment(parentComment.kids)
                          }
                        >
                          {parentComment.kids.length} child comment
                          {parentComment.kids.length > 1 ? "s" : ""} ▼
                        </span>
                      </p>
                    )}
                  </CommentTitleStyled>
                  <CommentBodyStyled>{parentComment.text}</CommentBodyStyled>

                  <ChildCommentContainerStyled>
                    {selectCurrentParentComments
                      .filter((childComment) => {
                        return childComment.parent === parentComment.id;
                      })
                      .map((childComment) => (
                        <>
                          <CommentTitleStyled>
                            <p>▲ {childComment.by}</p>
                            <p>
                              {new Date(childComment.time * 1000).getMinutes() >
                              60
                                ? Math.floor(
                                    new Date(
                                      childComment.time * 1000
                                    ).getMinutes() / 60
                                  ) + " hours ago"
                                : new Date(
                                    childComment.time * 1000
                                  ).getMinutes() + " minutes ago"}
                            </p>
                          </CommentTitleStyled>
                          <CommentBodyStyled>
                            <p>{childComment.text}</p>
                          </CommentBodyStyled>
                        </>
                      ))}
                  </ChildCommentContainerStyled>
                </ParentCommentContainerStyled>
              )
            )}
          </CommentSectionStyled>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};
