import styled from "styled-components";

export const LatestNewsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  margin-bottom: 15px;
  background: #f6f6ef;
`;

export const LatestNewsTitleStyled = styled.div`
  display: flex;
  gap: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 5px;
`;

export const LatestNewsBodyStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  color: #808080;
  font-size: 13px;

  a {
    color: #808080;
  }

  a:hover {
    text-decoration: underline;
  }
`;
