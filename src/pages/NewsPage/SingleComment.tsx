import React, { useState } from "react";
import {
  ChildCommentContainerStyled,
  CommentBodyStyled,
  CommentTitleStyled,
  ParentCommentContainerStyled,
} from "./NewsPage.styled";
import { getTimeAgo } from "../../utils/getTimeAgo";

export const SingleComment = (props: any) => {
  const [isChildVisible, setIsChildVisible] = useState(false);
  return (
    <ParentCommentContainerStyled>
      <CommentTitleStyled>
        <p>{props.parentComment.by}</p>
        <p>
          {new Date(props.parentComment.time * 1000).getMinutes() > 60
            ? Math.floor(
                new Date(props.parentComment.time * 1000).getMinutes() / 60
              ) + " hours ago"
            : new Date(props.parentComment.time * 1000).getMinutes() +
              " minutes ago"}
        </p>

        {props.parentComment.kids && props.parentComment.kids.length > 0 && (
          <p>
            | this comment has{" "}
            <span
              onClick={() => {
                if (!isChildVisible) {
                  props.handleClickOnComment(props.parentComment.kids);
                }
                setIsChildVisible(!isChildVisible);
              }}
            >
              {props.parentComment.kids.length} child comment
              {props.parentComment.kids.length > 1 ? "s" : ""}{" "}
              {isChildVisible ? "▲" : "▼"}
            </span>
          </p>
        )}
      </CommentTitleStyled>
      <CommentBodyStyled>
        <div
          dangerouslySetInnerHTML={{ __html: props.parentComment.text }}
        ></div>
      </CommentBodyStyled>

      {isChildVisible && (
        <ChildCommentContainerStyled>
          {props.selectCurrentParentComments
            .filter((childComment: any) => {
              return childComment.parent === props.parentComment.id;
            })
            .map((childComment: any) => (
              <>
                <CommentTitleStyled>
                  <p>▲ {childComment.by}</p>
                  <p>{getTimeAgo(childComment.time)}</p>
                </CommentTitleStyled>
                <CommentBodyStyled>
                  <p>{childComment.text}</p>
                </CommentBodyStyled>
              </>
            ))}
        </ChildCommentContainerStyled>
      )}
    </ParentCommentContainerStyled>
  );
};
