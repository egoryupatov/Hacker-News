import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hooks";
import {
  getDetailedNewsInfo,
  getLatestNews,
  selectLatestNews,
} from "../store/newsSlice";
import { useEffect } from "react";

export const useGetDetailedNewsInfo = () => {
  const dispatch = useDispatch();
  const newsID = useAppSelector(selectLatestNews);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
      .then((response) => response.json())
      .then((response) => dispatch(getLatestNews(response)));

    newsID.forEach((id: number) => {
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      )
        .then((response) => response.json())
        .then((response) => dispatch(getDetailedNewsInfo(response)));
    });
  }, []);
};
