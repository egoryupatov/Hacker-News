import React from "react";
import { useAppSelector } from "../../store/hooks";
import { selectDetailedNewsInfo } from "../../store/newsSlice";
import { useGetDetailedNewsInfo } from "../../utils/useGetDetailedNewsInfo";
import {
  NewsInfoStyled,
  NewsTitleStyled,
  NewsContainerStyled,
} from "./News.styled";

export const News = () => {
  useGetDetailedNewsInfo();
  const detailedNewsInfo = useAppSelector(selectDetailedNewsInfo);

  return (
    <>
      {detailedNewsInfo.map((e, i) => (
        <NewsContainerStyled>
          <NewsTitleStyled>{i + 1 + ". " + e.title}</NewsTitleStyled>
          <NewsInfoStyled>
            <p>{e.score} points</p>
            <p>by {e.by}</p>
            <p>
              {new Date(e.time * 1000).getMinutes() > 60
                ? Math.floor(new Date(e.time * 1000).getMinutes() / 60) +
                  " hours ago"
                : new Date(e.time * 1000).getMinutes() + " minutes ago"}
            </p>
          </NewsInfoStyled>
        </NewsContainerStyled>
      ))}
    </>
  );
};
