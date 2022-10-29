import React from "react";
import {
  ChildCommentContainerStyled,
  CommentBodyStyled,
  CommentSectionStyled,
  CommentTitleStyled,
  ParentCommentContainerStyled,
} from "./NewsPage.styled";

export const NewsPageComments = (props: any) => {
  return (
    <CommentSectionStyled>
      {props.parentComments.map((parentComment: any) =>
        !parentComment.text ? (
          ""
        ) : (
          <ParentCommentContainerStyled>
            <CommentTitleStyled>
              <p>{parentComment.by}</p>
              <p>
                {new Date(parentComment.time * 1000).getMinutes() > 60
                  ? Math.floor(
                      new Date(parentComment.time * 1000).getMinutes() / 60
                    ) + " hours ago"
                  : new Date(parentComment.time * 1000).getMinutes() +
                    " minutes ago"}
              </p>

              {parentComment.kids && parentComment.kids.length > 0 && (
                <p>
                  | this comment has{" "}
                  <span
                    onClick={() =>
                      props.handleClickOnComment(parentComment.kids)
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
              {props.selectCurrentParentComments
                .filter((childComment: any) => {
                  return childComment.parent === parentComment.id;
                })
                .map((childComment: any) => (
                  <>
                    <CommentTitleStyled>
                      <p>▲ {childComment.by}</p>
                      <p>
                        {new Date(childComment.time * 1000).getMinutes() > 60
                          ? Math.floor(
                              new Date(childComment.time * 1000).getMinutes() /
                                60
                            ) + " hours ago"
                          : new Date(childComment.time * 1000).getMinutes() +
                            " minutes ago"}
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
  );
};
