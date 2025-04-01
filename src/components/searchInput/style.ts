import styled from "styled-components";

export const SearchInputContainer = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;
`;

export const InputStyle = styled.input`
  padding: 10px 16px;
  padding-right: 40px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.lightBlue};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.7;
  }
`;

export const ButtonStyle = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  transition: color 0.3s ease;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const SearchStyle = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;
