import React from "react";
import { NewsPageHeader } from "./NewsPageHeader";
import { NewsPageComments } from "./NewsPageComments";
import { Spinner } from "../../components/Spinner/Spinner";
import { CurrentNews, CurrentNewsParentComments } from "../../store/newsSlice";
import { NewsPageContainerStyled } from "./NewsPage.styled";

interface NewsPageProps {
  areCommentsLoaded: boolean;
  currentNews: CurrentNews | null;
  parentComments: CurrentNewsParentComments[];
  handleClickOnComment: (commentsID: number[]) => void;
  currentNewsComments: CurrentNewsParentComments[];
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
