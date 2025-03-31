import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  getDetailsMovie,
  getCredits,
  getSimilarMovies,
  getVideos,
} from "../../service/api";
import {
  DetailContainer,
  MovieHeader,
  MoviePoster,
  MovieInfo,
  SectionTitle,
  CastList,
  SimilarMovies,
  VideoContainer,
  InfoGrid,
  InfoItem,
  Tagline,
  Overview,
  Metadata,
  Backdrop,
} from "./style";
import { Rating } from "@mui/material";
import { formatDate } from "../../utils/formatDate";
import { convertRuntime } from "../../utils/convertRuntime";
import { LoadingContainer } from "../popular/style";

export const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { currentMovie, credits, similarMovies, videos, loading, error } =
    useSelector((state: RootState) => state.movieReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getDetailsMovie(Number(id), dispatch);
      getCredits(Number(id), dispatch);
      getSimilarMovies(Number(id), dispatch);
      getVideos(Number(id), dispatch);
    }
  }, [id, dispatch]);

  if (loading)
    return (
      <LoadingContainer>
        <div className="spinner"></div>
        <p>Carregando filmes...</p>
      </LoadingContainer>
    );
  if (error) return <div>Error: {error}</div>;
  if (!currentMovie) return <div>Filme não encontrado</div>;

  const genres =
    currentMovie.genres?.map((genre) => genre.name).join(", ") || "N/A";
  const directors =
    credits?.crew?.filter((person) => person.job === "Director") || [];
  const mainCast = credits?.cast?.slice(0, 6) || [];
  const trailer = videos?.results?.find((video) => video.type === "Trailer");
  const backdropUrl = currentMovie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`
    : "";
  const voteAverage = currentMovie.vote_average
    ? currentMovie.vote_average.toFixed(1)
    : "N/A";
  const releaseYear = currentMovie.release_date
    ? new Date(currentMovie.release_date).getFullYear()
    : "N/A";

  return (
    <DetailContainer>
      {backdropUrl && (
        <Backdrop src={backdropUrl} alt={currentMovie.title || "Filme"} />
      )}

      <MovieHeader>
        <MoviePoster>
          <img
            src={
              currentMovie.poster_path
                ? `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`
                : "/placeholder-movie.jpg"
            }
            alt={currentMovie.title || "Filme"}
          />
        </MoviePoster>

        <MovieInfo>
          <h1>
            {currentMovie.title || "Título não disponível"}{" "}
            <span>({releaseYear})</span>
          </h1>

          <Metadata>
            <div>
              <Rating
                name="read-only"
                value={
                  currentMovie.vote_average ? currentMovie.vote_average / 2 : 0
                }
                precision={0.1}
                readOnly
              />
              <span>{voteAverage}/10</span>
            </div>
            <span>{formatDate(currentMovie.release_date)}</span>
            <span>{convertRuntime(currentMovie.runtime)}</span>
            <span>{genres}</span>
          </Metadata>

          {currentMovie.tagline && <Tagline>"{currentMovie.tagline}"</Tagline>}

          <SectionTitle>Sinopse</SectionTitle>
          <Overview>
            {currentMovie.overview || "Sinopse não disponível."}
          </Overview>

          <InfoGrid>
            <InfoItem>
              <h4>Direção</h4>
              <p>
                {directors.length > 0
                  ? directors.map((d) => d.name).join(", ")
                  : "N/A"}
              </p>
            </InfoItem>

            <InfoItem>
              <h4>Orçamento</h4>
              <p>
                {currentMovie.budget
                  ? `$${currentMovie.budget.toLocaleString()}`
                  : "N/A"}
              </p>
            </InfoItem>

            <InfoItem>
              <h4>Receita</h4>
              <p>
                {currentMovie.revenue
                  ? `$${currentMovie.revenue.toLocaleString()}`
                  : "N/A"}
              </p>
            </InfoItem>

            <InfoItem>
              <h4>Status</h4>
              <p>{currentMovie.status || "N/A"}</p>
            </InfoItem>
          </InfoGrid>
        </MovieInfo>
      </MovieHeader>

      {trailer && (
        <>
          <SectionTitle>Trailer</SectionTitle>
          <VideoContainer>
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name || "Trailer"}
              allowFullScreen
            />
          </VideoContainer>
        </>
      )}

      {mainCast.length > 0 && (
        <>
          <SectionTitle>Elenco Principal</SectionTitle>
          <CastList>
            {mainCast.map((actor) => (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : "/placeholder-actor.jpg"
                  }
                  alt={actor.name}
                />
                <h5>{actor.name}</h5>
                <p>{actor.character || "Personagem"}</p>
              </li>
            ))}
          </CastList>
        </>
      )}

      {similarMovies && similarMovies.length > 0 && (
        <>
          <SectionTitle>Filmes Similares</SectionTitle>
          <SimilarMovies>
            {similarMovies.slice(0, 6).map((movie) => (
              <li key={movie.id} onClick={() => navigate(`/filme/${movie.id}`)}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : "/placeholder-movie.jpg"
                  }
                  alt={movie.title || "Filme similar"}
                />
                <h5>{movie.title || "Título não disponível"}</h5>
              </li>
            ))}
          </SimilarMovies>
        </>
      )}
    </DetailContainer>
  );
};
