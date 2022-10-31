import React from "react";
import { NewsPageCommentsStyled } from "./NewsPage.styled";
import { SingleComment } from "./SingleComment";
import { Comments } from "../../store/newsSlice";

export interface NewsPageCommentsProps {
  parentComments: Comments[];
  handleClickOnComment: (commentsID: number[]) => void;
  currentNewsComments: Comments[];
}

export const NewsPageComments: React.FC<NewsPageCommentsProps> = (props) => {
  return (
    <NewsPageCommentsStyled>
      {props.parentComments.map((parentComment: Comments) =>
        !parentComment.text ? (
          ""
        ) : (
          <SingleComment
            key={parentComment.id}
            parentComment={parentComment}
            handleClickOnComment={props.handleClickOnComment}
            currentNewsComments={props.currentNewsComments}
          />
        )
      )}
    </NewsPageCommentsStyled>
  );
};
