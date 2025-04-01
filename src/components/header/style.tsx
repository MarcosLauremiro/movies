import styled from "styled-components";
import { SearchInput } from "../searchInput";
import { Container } from "../container/style";

export const Content = styled(Container)`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: transparent;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  cursor: pointer;
  
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    margin: 0;
    transition: color 0.3s ease;
  }

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    transition: color 0.3s ease;
  }

  @media (min-width: 768px) {
    justify-content: start;
  }

  &:hover {
    h1 {
      color: ${({ theme }) => theme.colors.secondary};
    }
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SearchInputStyle = styled(SearchInput)`
  width: 100%;
`;

export const ContentSearch = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
    width: auto;
  }
`;

