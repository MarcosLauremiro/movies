import React from "react";
import { Content, ContentSearch, Logo, SearchInputStyle } from "./style";
import { MdMovieCreation } from "react-icons/md";
import { Container } from "../container/style";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../store/themeReducer";
import { ButtonTheme } from "../buttonTheme";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Container>
      <Content>
        <Logo onClick={() => navigate("/")}>
          <MdMovieCreation size={24} />
          <h1>Movies Mytia</h1>
        </Logo>
        <ContentSearch>
          <SearchInputStyle
            placeholder="Search Movies"
            ChildrenButton={<CiSearch />}
          />
          <ButtonTheme onClick={handleThemeToggle} />
        </ContentSearch>
      </Content>
    </Container>
  );
};
