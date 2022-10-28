import { useDispatch } from "react-redux";
import {
  getDetailedNewsInfo,
  selectAreNewsLoaded,
  setAreNewsLoaded,
} from "../store/newsSlice";
import { useAppSelector } from "../store/hooks";
import { useCallback } from "react";

export const useGetDetailedNewsInfo = () => {
  const dispatch = useDispatch();
  const areNewsLoaded = useAppSelector(selectAreNewsLoaded);

  const getNews = useCallback(() => {
    fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
      .then((response) => response.json())
      .then((response) => {
        Promise.all(
          response.slice(0, 10).map((id: number) => {
            return fetch(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
            ).then((response) => response.json());
          })
        ).then((news) => dispatch(getDetailedNewsInfo(news)));

        dispatch(setAreNewsLoaded(true));
      });
  }, []);

  return [getNews];
};
