import React, { useEffect, useState } from "react";
import { PageContainer } from "../../styles/general.styled";
import { useDispatch } from "react-redux";
import {
  getDetailedNewsInfo,
  getLatestNews,
  selectDetailedNewsInfo,
  selectLatestNews,
} from "../../store/newsSlice";
import { useAppSelector } from "../../store/hooks";
import { useGetDetailedNewsInfo } from "../../utils/useGetDetailedNewsInfo";

export const Homepage = () => {
  const dispatch = useDispatch();
  const latestNews = useAppSelector(selectLatestNews);
  const detailedNewsInfo = useAppSelector(selectDetailedNewsInfo);
  const [isLoaded, setIsLoaded] = useState(true);

  useGetDetailedNewsInfo();

  console.log(detailedNewsInfo);

  return (
    <PageContainer>
      {isLoaded ? (
        latestNews.map((newsID: number) => <p>{newsID}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </PageContainer>
  );
};
