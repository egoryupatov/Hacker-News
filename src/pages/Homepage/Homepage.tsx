import React from "react";
import { PageContainer } from "../../styles/general.styled";
import { LatestNews } from "../../components/News/LatestNews";

export const Homepage = () => {
  return (
    <PageContainer>
      <LatestNews />
    </PageContainer>
  );
};
