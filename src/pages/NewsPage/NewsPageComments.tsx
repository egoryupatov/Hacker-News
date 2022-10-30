import React from "react";
import { NewsPageCommentsStyled } from "./NewsPage.styled";
import { SingleComment } from "./SingleComment";
import { CurrentNewsParentComments } from "../../store/newsSlice";

interface NewsPageCommentsProps {
  parentComments: CurrentNewsParentComments[];
  handleClickOnComment: (commentsID: number[]) => void;
  selectCurrentParentComments: CurrentNewsParentComments[];
}

export const NewsPageComments: React.FC<NewsPageCommentsProps> = (props) => {
  return (
    <NewsPageCommentsStyled>
      {props.parentComments.map((parentComment: CurrentNewsParentComments) =>
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
    </NewsPageCommentsStyled>
  );
};
