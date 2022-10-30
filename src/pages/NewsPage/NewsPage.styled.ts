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
`;

export const NewsPageContainerStyled = styled.div`
  padding-bottom: 20px;
`;

export const ParentCommentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 30px 15px 30px;
  gap: 15px;
  background: #f6f6ef;

  &:nth-last-child(1) {
    padding: 5px 30px 0px 30px;
  }
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

  p {
    margin-top: 10px;
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

  p {
    margin-top: 10px;
  }
`;
