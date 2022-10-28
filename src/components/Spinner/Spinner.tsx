import React from "react";
import {
  SpinnerStyled,
  SpinnerContainerStyled,
  SpinnerWrapperStyled,
} from "./Spinner.styled";

export const Spinner = () => {
  return (
    <SpinnerWrapperStyled>
      <SpinnerContainerStyled>
        <SpinnerStyled />
        <div>Loading news...</div>
      </SpinnerContainerStyled>
    </SpinnerWrapperStyled>
  );
};
