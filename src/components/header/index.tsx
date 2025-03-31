import React from "react";
import { Content, Logo, SearchInputStyle } from "./style";
import { MdMovieCreation } from "react-icons/md";
import { Container } from "../container/style";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <Logo onClick={() => navigate("/")}>
          <MdMovieCreation size={24} />
          <h1>Movies Mytia</h1>
        </Logo>
        <SearchInputStyle
          placeholder="Search Movies"
          ChildrenButton={<CiSearch />}
        />
      </Content>
    </Container>
  );
};
