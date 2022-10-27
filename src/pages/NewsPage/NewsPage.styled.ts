import styled from "styled-components";
import {
  NewsContainerStyled,
  NewsInfoStyled,
  NewsTitleStyled,
} from "../../components/News/News.styled";

export const NewsPageContainerStyled = styled(NewsContainerStyled)``;

export const NewsPageCommentSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  margin-bottom: 15px;
`;

export const NewsPageParentCommentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  margin-bottom: 15px;
  background: #f6f6ef;
`;

export const NewsPageChildCommentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  margin-bottom: 15px;
  background: #f6f6ef;
  margin-left: 40px;
`;

export const NewsPageTitleStyled = styled(NewsTitleStyled)`
  justify-content: start;
  gap: 10px;
  color: #3c4043;
`;

export const NewsPageTitleURLStyled = styled.div`
  font-size: 12px;

  a {
    color: #808080;
  }
`;

export const NewsPageCommentTitleStyled = styled.div`
  display: flex;
  gap: 5px;
  color: #808080;
  font-size: 12px;
`;

export const NewsPageCommentBodyStyled = styled.div`
  display: flex;
  font-size: 14px;
  color: #3c4043;
`;

export const NewsPageInfoStyled = styled(NewsInfoStyled)``;
