import React from "react";
import { NewsPageHeader } from "./NewsPageHeader";
import { NewsPageComments } from "./NewsPageComments";
import { Spinner } from "../../components/Spinner/Spinner";
import { CurrentNews, CurrentNewsParentComments } from "../../store/newsSlice";

interface NewsPageProps {
  areCommentsLoaded: boolean;
  selectCurrentNews: CurrentNews;
  parentComments: CurrentNewsParentComments[];
  handleClickOnComment: (commentsID: number[]) => void;
  selectCurrentParentComments: CurrentNewsParentComments[];
}

export const NewsPage: React.FC<NewsPageProps> = (props) => {
  return (
    <>
      {props.areCommentsLoaded || !props.selectCurrentNews.kids ? (
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
    </>
  );
};
