import React from "react";
import { useParams } from "react-router-dom";

export const NewsPage = () => {
  const params = useParams();

  return <div>This is a news page! This news ID - {params.id}</div>;
};
