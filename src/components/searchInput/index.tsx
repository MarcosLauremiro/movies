import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  ButtonStyle,
  InputStyle,
  SearchInputContainer,
  SearchStyle,
} from "./style";
import { searchMovies } from "../../service/api";
import { setSearchQuery, setSearchResults } from "../../store/movieReducer";
import { SearchResults } from "../searchResults";

interface SearchInputProps {
  placeholder: string;
  ChildrenButton?: React.ReactNode | string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  ChildrenButton,
}) => {
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.trim()) {
      const handler = setTimeout(() => {
        searchMovies(query, dispatch);
        setShowResults(true);
      }, 500);

      return () => clearTimeout(handler);
    } else {
      dispatch(setSearchResults([]));
      setShowResults(false);
    }
  }, [query, dispatch]);

  const handleBlur = () => {
    setTimeout(() => {
      setShowResults(false);
    }, 200);
  };

  return (
    <SearchInputContainer>
      <SearchStyle>
        <InputStyle
          ref={inputRef}
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            dispatch(setSearchQuery(e.target.value));
          }}
          onFocus={() => query.trim() && setShowResults(true)}
          onBlur={handleBlur}
        />
        <ButtonStyle type="submit">{ChildrenButton}</ButtonStyle>
      </SearchStyle>
      {showResults && <SearchResults onClose={() => setShowResults(false)} />}
    </SearchInputContainer>
  );
};
