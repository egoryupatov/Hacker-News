import styled from "styled-components";

export const SpinnerContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const SpinnerWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  min-height: 80vh;
  align-items: center;
`;

export const SpinnerStyled = styled.div`
  border: 12px solid #f3f3f3;
  border-top: 12px solid #ff6600;
  border-radius: 50%;
  margin: 0 auto;
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
