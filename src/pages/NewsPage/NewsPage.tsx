import React from "react";
import { NewsPageHeader } from "./NewsPageHeader";
import { NewsPageComments } from "./NewsPageComments";
import { Spinner } from "../../components/Spinner/Spinner";
import { Comments, News } from "../../store/newsSlice";
import { NewsPageContainerStyled } from "./NewsPage.styled";

export interface NewsPageProps {
  areCommentsLoaded: boolean;
  currentNews: News | null;
  parentComments: Comments[];
  handleClickOnComment: (commentsID: number[]) => void;
  currentNewsComments: Comments[];
}

export const NewsPage: React.FC<NewsPageProps> = (props) => {
  return (
    <NewsPageContainerStyled>
      {props.areCommentsLoaded && props.currentNews ? (
        <>
          <NewsPageHeader currentNews={props.currentNews} />
          <NewsPageComments
            parentComments={props.parentComments}
            handleClickOnComment={props.handleClickOnComment}
            currentNewsComments={props.currentNewsComments}
          />
        </>
      ) : (
        <Spinner />
      )}
    </NewsPageContainerStyled>
  );
};
