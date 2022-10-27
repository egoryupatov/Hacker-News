import styled from "styled-components";

export const SpinnerContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20%;
`;

export const SpinnerStyled = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #ff6600;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;