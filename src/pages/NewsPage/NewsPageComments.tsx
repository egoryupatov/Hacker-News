import React, { useState } from "react";
import { CommentSectionStyled } from "./NewsPage.styled";
import { SingleComment } from "./SingleComment";

export const NewsPageComments = (props: any) => {
  return (
    <CommentSectionStyled>
      {props.parentComments.map((parentComment: any) =>
        !parentComment.text ? (
          ""
        ) : (
          <SingleComment
            key={parentComment.id}
            parentComment={parentComment}
            handleClickOnComment={props.handleClickOnComment}
            selectCurrentParentComments={props.selectCurrentParentComments}
          />
        )
      )}
    </CommentSectionStyled>
  );
};
