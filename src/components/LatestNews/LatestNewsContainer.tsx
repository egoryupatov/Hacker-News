import React from "react";
import { useAppSelector } from "../../store/hooks";
import {
  selectAreNewsLoaded,
  selectDetailedNewsInfo,
} from "../../store/newsSlice";
import { useGetNews } from "../../utils/useGetNews";
import { useEffect } from "react";
import { LatestNews } from "./LatestNews";

export const LatestNewsContainer: React.FC = () => {
  const [getNews] = useGetNews();

  useEffect(() => {
    getNews();
    const getNewsInterval = setInterval(() => {
      getNews();
    }, 1000 * 60);
    return () => clearInterval(getNewsInterval);
  }, []);

  const detailedNewsInfo = useAppSelector(selectDetailedNewsInfo);
  const areNewsLoaded = useAppSelector(selectAreNewsLoaded);

  return (
    <LatestNews
      areNewsLoaded={areNewsLoaded}
      detailedNewsInfo={detailedNewsInfo}
    />
  );
};
