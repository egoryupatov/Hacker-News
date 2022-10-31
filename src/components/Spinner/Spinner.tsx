import React from "react";
import {
  SpinnerStyled,
  SpinnerContainerStyled,
  SpinnerWrapperStyled,
} from "./Spinner.styled";
import { useLocation } from "react-router-dom";

export const Spinner: React.FC = () => {
  const location = useLocation();

  return (
    <SpinnerWrapperStyled test-id={"spinner"}>
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
