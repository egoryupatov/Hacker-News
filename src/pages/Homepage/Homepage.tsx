import React from "react";
import { PageContainerStyled } from "../../styles/general.styled";
import { LatestNewsContainer } from "../../components/LatestNews/LatestNewsContainer";

export const Homepage: React.FC = () => {
  return (
    <PageContainerStyled>
      <LatestNewsContainer />
    </PageContainerStyled>
  );
};
