import React from "react";
import {
  SpinnerStyled,
  SpinnerContainerStyled,
  SpinnerWrapperStyled,
} from "./Spinner.styled";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectDetailedNewsInfo } from "../../store/newsSlice";

export const Spinner = () => {
  const location = useLocation();
  const selectNewsNumber = useAppSelector(selectDetailedNewsInfo);

  return (
    <SpinnerWrapperStyled>
      <SpinnerContainerStyled>
        <SpinnerStyled />
        {location.pathname.includes("news") ? (
          <div>Loading comments... </div>
        ) : (
          <div>Loading news...</div>
        )}
      </SpinnerContainerStyled>
    </SpinnerWrapperStyled>
  );
};
