import styled from "styled-components";

export const ButtonThemeStyle = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;

  svg {
    font-size: 1.4rem;
    transition: transform 0.3s ease, color 0.3s ease;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    svg {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  &:active {
    transform: scale(0.95);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary}10;
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scale(1);
  }
`;
