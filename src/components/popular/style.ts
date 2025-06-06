import styled from "styled-components";
import { Container } from "../container/style";

export const PopularContainer = styled(Container)`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.5rem;
    text-align: center;
    font-weight: 600;
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 80px;
      height: 4px;
      background: ${({ theme }) => `linear-gradient(90deg, ${theme.colors.secondary}, ${theme.colors.lightBlue})`};
      margin: 0.5rem auto 0;
      border-radius: 2px;
    }
  }
`;

export const ContainerMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0;
  flex-wrap: wrap;

  button {
    padding: 0.5rem 1.25rem;
    border: none;
    border-radius: 50px;
    background: ${({ theme }) => `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`};
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    min-width: 100px;

    &:disabled {
      background: ${({ theme }) => theme.colors.cardBg};
      color: ${({ theme }) => theme.colors.textSecondary};
      cursor: not-allowed;
      box-shadow: none;
    }

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  }

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;

    strong {
      color: ${({ theme }) => theme.colors.text};
      font-weight: 600;
    }
  }

  @media (max-width: 480px) {
    gap: 1rem;
    button {
      padding: 0.5rem 1rem;
      min-width: 80px;
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  gap: 1rem;

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid ${({ theme }) => theme.colors.cardBg};
    border-top: 5px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1rem;
  }
`;