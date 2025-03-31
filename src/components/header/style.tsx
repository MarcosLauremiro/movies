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
  @media (min-width: 768px) {
    justify-content: start;
  }
`;

export const SearchInputStyle = styled(SearchInput)`
  width: 100%;
`;
