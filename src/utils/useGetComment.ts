import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import {
  getCurrentNewsInfo,
  getCurrentNewsParentComments,
} from "../store/newsSlice";

export const useGetComment = () => {
  const dispatch = useDispatch();

  const getComment = useCallback((id: number) => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(getCurrentNewsParentComments([response]));
      });
  }, []);

  return [getComment];
};
