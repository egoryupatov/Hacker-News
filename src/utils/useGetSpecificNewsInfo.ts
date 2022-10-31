import { useDispatch } from "react-redux";
import { useCallback } from "react";
import {
  Comments,
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
        if (response.kids) {
          Promise.all(
            response.kids.map((comment: Comments) => {
              return fetch(
                `https://hacker-news.firebaseio.com/v0/item/${comment}.json?print=pretty`
              ).then((response) => response.json());
            })
          ).then((comments) => {
            dispatch(getCurrentNewsParentComments(comments));
            dispatch(setAreCommentsLoaded(true));
          });
        } else {
          dispatch(setAreCommentsLoaded(true));
        }
      });
  }, []);

  return [getComments];
};
