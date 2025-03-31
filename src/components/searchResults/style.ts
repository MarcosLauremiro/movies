import styled from "styled-components";

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  position: absolute;
  z-index: 10;
  background-color: white;
  overflow-y: auto;
  max-height: 400px;
  width: 100%;
    max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #e0e0e0;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8a8a8;
  }
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 10px 15px;
  transition: all 0.2s ease;
  border-bottom: 1px solid #f5f5f5;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f8f8;
  }

  img {
    width: 45px;
    height: 67px;
    border-radius: 4px;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .movie-info {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 0.95rem;
      font-weight: 500;
      color: #333;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px;
    }

    span {
      font-size: 0.8rem;
      color: #777;
      margin-top: 3px;
    }
  }
`;
