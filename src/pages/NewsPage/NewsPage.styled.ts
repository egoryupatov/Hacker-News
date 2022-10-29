import styled from "styled-components";
import {
  NewsContainerStyled,
  NewsInfoStyled,
  NewsTitleStyled,
} from "../../components/LatestNews/News.styled";

export const TitleSectionStyled = styled(NewsContainerStyled)``;

export const CommentSectionStyled = styled.div`
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

export const NewsPageInfoStyled = styled(NewsInfoStyled)`
  font-size: 13px;
`;
