import React from "react";
import { SpinnerStyled, SpinnerContainerStyled } from "./Spinner.styled";

export const Spinner = () => {
  return (
    <SpinnerContainerStyled>
      <SpinnerStyled />
      Loading news...
    </SpinnerContainerStyled>
  );
};
