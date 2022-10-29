import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import {
  getCurrentNewsInfo,
  getCurrentNewsParentComments,
  setAreCommentsLoaded,
} from "../store/newsSlice";

export const useGetSpecificNewsInfo = () => {
  const dispatch = useDispatch();

  const getComments = useCallback((id: number) => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(getCurrentNewsInfo(response));

        Promise.all(
          response.kids.map((comment: any) => {
            return fetch(
              `https://hacker-news.firebaseio.com/v0/item/${comment}.json?print=pretty`
            ).then((response) => response.json());
          })
        ).then((comments) => {
          dispatch(getCurrentNewsParentComments(comments));
          dispatch(setAreCommentsLoaded(true));
        });
      });
  }, []);

  return [getComments];
};
