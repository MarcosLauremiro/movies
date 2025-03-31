import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { ResultItem, SearchResultsContainer } from "./style";

interface SearchResultsProps {
  onClose: () => void;
}

export const SearchResults = ({ onClose }: SearchResultsProps) => {
  const { searchResults } = useSelector(
    (state: RootState) => state.movieReducer
  );
  const navigate = useNavigate();

  const handleMovieClick = (movieId: number) => {
    navigate(`/filme/${movieId}`);
    onClose();
  };

  if (searchResults.length === 0) return null;

  return (
    <SearchResultsContainer>
      {searchResults.map((movie) => (
        <ResultItem
          key={movie.id}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => handleMovieClick(movie.id)}
        >
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
              loading="lazy"
            />
          )}
          <div className="movie-info">
            <h3>{movie.title}</h3>
            {movie.release_date && (
              <span>{new Date(movie.release_date).getFullYear()}</span>
            )}
          </div>
        </ResultItem>
      ))}
    </SearchResultsContainer>
  );
};
