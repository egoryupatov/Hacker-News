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

export const NewsPageContainer: React.FC = () => {
  const areCommentsLoaded = useAppSelector(selectAreCommentsLoaded);
  const params = useParams();

  const [getCurrentNews] = useGetSpecificNewsInfo();
  const [getCurrentNewsComments] = useGetComments();

  useEffect(() => {
    getCurrentNews(Number(params.id));
  }, []);

  const currentNews = useAppSelector(selectCurrentNewsInfo);
  const currentNewsComments = useAppSelector(selectCurrentNewsCommentsArray);

  const parentComments = currentNewsComments.filter((comment) => {
    return comment.parent === Number(params.id);
  });

  const handleClickOnComment = (commentsID: number[]) => {
    commentsID.forEach((id: number) => {
      getCurrentNewsComments(id);
    });
  };

  return (
    <NewsPage
      areCommentsLoaded={areCommentsLoaded}
      currentNews={currentNews}
      parentComments={parentComments}
      handleClickOnComment={handleClickOnComment}
      currentNewsComments={currentNewsComments}
    />
  );
};
