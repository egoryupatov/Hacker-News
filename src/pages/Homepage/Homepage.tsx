import React from "react";
import { PageContainer } from "../../styles/general.styled";
import { News } from "../../components/News/News";
import { Spinner } from "../../components/Spinner/Spinner";

export const Homepage = () => {
  return (
    <PageContainer>
      <News />
    </PageContainer>
  );
};
