import React from "react";
import { NewsPageHeader } from "./NewsPageHeader";
import { NewsPageComments } from "./NewsPageComments";
import { Spinner } from "../../components/Spinner/Spinner";

export const NewsPage = (props: any) => {
  return (
    <>
      {props.areCommentsLoaded ? (
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
