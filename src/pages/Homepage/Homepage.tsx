import React, { useEffect, useState } from "react";
import { PageContainer } from "../../styles/general.styled";
import { useDispatch } from "react-redux";
import { getLatestNews, selectLatestNews } from "../../store/newsSlice";
import { useAppSelector } from "../../store/hooks";

export const Homepage = () => {
  const dispatch = useDispatch();
  const latestNews = useAppSelector(selectLatestNews);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
      .then((response) => response.json())
      .then((response) => dispatch(getLatestNews(response)));

    setIsLoaded(true);
  }, []);

  console.log(latestNews.length);

  return (
    <PageContainer>
      {isLoaded
        ? latestNews.map((newsID: number) => <p>{newsID}</p>)
        : "Loading..."}
    </PageContainer>
  );
};
