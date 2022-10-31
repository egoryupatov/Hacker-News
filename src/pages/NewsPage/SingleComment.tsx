import React, { useState } from "react";
import {
  CommentBodyStyled,
  CommentTitleStyled,
  ParentCommentContainerStyled,
} from "./NewsPage.styled";
import { getTimeAgo } from "../../utils/getTimeAgo";
import { Comments } from "../../store/newsSlice";
import { NewsPageComments } from "./NewsPageComments";

export interface SingleCommentProps {
  parentComment: Comments;
  handleClickOnComment: (commentsID: number[]) => void;
  currentNewsComments: Comments[];
}

export const SingleComment: React.FC<SingleCommentProps> = (props) => {
  const [isChildVisible, setIsChildVisible] = useState(false);
  return (
    <ParentCommentContainerStyled>
      <CommentTitleStyled>
        <p>{props.parentComment.by}</p>
        <p>{getTimeAgo(props.parentComment.time)}</p>

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
        <NewsPageComments
          parentComments={props.currentNewsComments.filter(
            (childComment: Comments) => {
              return childComment.parent === props.parentComment.id;
            }
          )}
          handleClickOnComment={props.handleClickOnComment}
          currentNewsComments={props.currentNewsComments}
        />
      )}
    </ParentCommentContainerStyled>
  );
};
