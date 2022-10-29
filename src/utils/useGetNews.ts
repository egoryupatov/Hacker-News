import { useDispatch } from "react-redux";
import { getDetailedNewsInfo, setAreNewsLoaded } from "../store/newsSlice";
import { useCallback } from "react";

export const useGetNews = () => {
  const dispatch = useDispatch();

  const getNews = useCallback(() => {
    fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
      .then((response) => response.json())
      .then((response) => {
        Promise.all(
          response.slice(0, 100).map((id: number) => {
            return fetch(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
            ).then((response) => response.json());
          })
        ).then((news) => {
          dispatch(getDetailedNewsInfo(news));
          dispatch(setAreNewsLoaded(true));
        });
      });
  }, []);

  return [getNews];
};
