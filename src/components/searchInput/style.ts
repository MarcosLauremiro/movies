import styled from "styled-components";

export const SearchInputContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const InputStyle = styled.input`
  padding: 8px;
  border-radius: 16px 0 0 16px;
  border: none;
  background-color: #f0f0f0;
  font-size: 16px;
  color: #333;
  outline: none;
  transition: all 0.3s ease-in-out;
  width: 100%;
  max-width: 400px;

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    border-radius: 16px 0 0 16px;
    color: #000;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
  }
`;

export const ButtonStyle = styled.button`
  border-radius: 0 16px 16px 0;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const SearchStyle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    justify-content: end;
  }
`;
