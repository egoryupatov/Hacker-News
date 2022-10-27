import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import {
  selectCurrentNewsInfo,
  getCurrentNewsInfo,
  getCurrentNewsParentComments,
  selectCurrentNewsParentComments,
} from "../store/newsSlice";

export const useGetSpecificNewsInfo = (id: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(getCurrentNewsInfo(response));

        response.kids.forEach((comment: any) => {
          fetch(
            `https://hacker-news.firebaseio.com/v0/item/${comment}.json?print=pretty`
          )
            .then((response) => response.json())
            .then((response) =>
              dispatch(getCurrentNewsParentComments(response))
            );
        });
      });
  }, []);
};
