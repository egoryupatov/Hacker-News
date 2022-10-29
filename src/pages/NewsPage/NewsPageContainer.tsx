import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSpecificNewsInfo } from "../../utils/useGetSpecificNewsInfo";
import { useAppSelector } from "../../store/hooks";
import {
  selectAreCommentsLoaded,
  selectCurrentNewsInfo,
} from "../../store/newsSlice";
import { selectCurrentNewsCommentsArray } from "../../store/newsSlice";
import { useGetComments } from "../../utils/useGetComments";
import { NewsPage } from "./NewsPage";

const newsID = 33360171;

export const NewsPageContainer = () => {
  const areCommentsLoaded = useAppSelector(selectAreCommentsLoaded);
  const params = useParams();

  const [getNewsWithComments] = useGetSpecificNewsInfo();
  const [getComment] = useGetComments();

  useEffect(() => {
    getNewsWithComments(newsID);
  }, []);

  //Number(params.id)

  const selectCurrentNews = useAppSelector(selectCurrentNewsInfo);
  const selectCurrentParentComments = useAppSelector(
    selectCurrentNewsCommentsArray
  );

  const parentComments = selectCurrentParentComments.filter((comment) => {
    return comment.parent === newsID;
  });

  const handleClickOnComment = (commentsID: number[]) => {
    commentsID.forEach((id: number) => {
      getComment(id);
    });
  };

  return (
    <NewsPage
      areCommentsLoaded={areCommentsLoaded}
      selectCurrentNews={selectCurrentNews}
      parentComments={parentComments}
      handleClickOnComment={handleClickOnComment}
      selectCurrentParentComments={selectCurrentParentComments}
    />
  );
};
