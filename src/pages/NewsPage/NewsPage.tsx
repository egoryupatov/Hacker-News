import React from "react";
import { NewsPageHeader } from "./NewsPageHeader";
import { NewsPageComments } from "./NewsPageComments";
import { Spinner } from "../../components/Spinner/Spinner";
import { CurrentNews, CurrentNewsParentComments } from "../../store/newsSlice";
import { NewsPageContainerStyled } from "./NewsPage.styled";

interface NewsPageProps {
  areCommentsLoaded: boolean;
  selectCurrentNews: CurrentNews | null;
  parentComments: CurrentNewsParentComments[];
  handleClickOnComment: (commentsID: number[]) => void;
  selectCurrentParentComments: CurrentNewsParentComments[];
}

export const NewsPage: React.FC<NewsPageProps> = (props) => {
  return (
    <NewsPageContainerStyled>
      {props.areCommentsLoaded && props.selectCurrentNews ? (
        <>
          <NewsPageHeader selectCurrentNews={props.selectCurrentNews} />
          <NewsPageComments
            parentComments={props.parentComments}
            handleClickOnComment={props.handleClickOnComment}
            selectCurrentParentComments={props.selectCurrentParentComments}
          />
        </>
      ) : (
        <Spinner />
      )}
    </NewsPageContainerStyled>
  );
};
