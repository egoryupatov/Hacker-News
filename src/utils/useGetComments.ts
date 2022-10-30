import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { getCurrentNewsParentComments } from "../store/newsSlice";

export const useGetComments = () => {
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
