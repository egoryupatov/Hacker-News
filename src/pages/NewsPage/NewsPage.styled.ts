import styled from "styled-components";
import {
  LatestNewsContainerStyled,
  LatestNewsBodyStyled,
  LatestNewsTitleStyled,
} from "../../components/LatestNews/LatestNews.styled";

export const NewsPageHeaderStyled = styled(LatestNewsContainerStyled)``;

export const NewsPageCommentsStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  margin-bottom: 15px;
`;

export const ParentCommentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  margin-bottom: 15px;
  background: #f6f6ef;
`;

export const NewsPageTitleStyled = styled(LatestNewsTitleStyled)`
  justify-content: start;
  gap: 10px;
  color: #3c4043;
`;

export const TitleURLStyled = styled.div`
  display: flex;
  font-size: 13px;
  align-items: center;

  a {
    color: #808080;
  }
`;

export const CommentTitleStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #808080;
  font-size: 13px;

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CommentBodyStyled = styled.div`
  display: flex;
  font-size: 14px;
  color: #3c4043;

  a {
    text-decoration: underline;
  }
`;

export const ChildCommentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #3c4043;
  margin-left: 40px;
  gap: 15px;
`;

export const NewsPageInfoStyled = styled(LatestNewsBodyStyled)`
  display: flex;
  flex-direction: row;
`;

export const NewsPageDescriptionStyled = styled(LatestNewsBodyStyled)`
  font-size: 13px;
  flex-direction: column;
`;

export const ParentNewsTextStyled = styled.div`
  display: flex;
  font-size: 14px;
`;
