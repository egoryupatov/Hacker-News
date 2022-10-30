import React from "react";
import { PageContainer } from "../../styles/general.styled";
import { LatestNewsContainer } from "../../components/LatestNews/LatestNewsContainer";

export const Homepage: React.FC = () => {
  return (
    <PageContainer>
      <LatestNewsContainer />
    </PageContainer>
  );
};
