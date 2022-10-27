import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  background: #ff6600;
  color: #ffffff;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
`;

export const NavbarButton = styled.button`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  cursor: pointer;
  padding: 10px;
  transition: all 250ms;

  &:hover {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: translateY(-1px);
  }
`;
