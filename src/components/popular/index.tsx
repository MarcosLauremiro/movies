import React, { useEffect, useState } from "react";
import {
  ContainerMovies,
  PopularContainer,
  PaginationContainer,
  LoadingContainer,
  EmptyState,
} from "./style";
import { CardMovie } from "../card";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesPopular } from "../../service/api";

export const PopularMovies: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, movies, totalPages } = useSelector(
    (state: RootState) => state.movieReducer
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getMoviesPopular(currentPage, dispatch);
  }, [dispatch, currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (loading)
    return (
      <LoadingContainer>
        <div className="spinner"></div>
        <p>Carregando filmes...</p>
      </LoadingContainer>
    );

  if (!movies || movies.length === 0)
    return (
      <EmptyState>
        <h3>Nenhum filme encontrado</h3>
        <p>Parece que não há filmes disponíveis no momento.</p>
      </EmptyState>
    );

  return (
    <PopularContainer>
      <h2>Movies Populares</h2>
      <ContainerMovies>
        {movies.map((movie, i) => (
          <CardMovie key={i} movie={movie} />
        ))}
      </ContainerMovies>

      <PaginationContainer>
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          aria-label="page previous"
        >
          &larr; Previous
        </button>

        <span>
          Page <strong>{currentPage}</strong> off <strong>{totalPages}</strong>
        </span>

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          aria-label="Próxima página"
        >
          Next &rarr;
        </button>
      </PaginationContainer>
    </PopularContainer>
  );
};
