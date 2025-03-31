import { FaPlayCircle, FaStar } from "react-icons/fa";
import {
  CardContainer,
  Details,
  Image,
  Info,
  Overlay,
  Rating,
  Synopsis,
  Avible,
} from "./style";
import React from "react";

import { useNavigate } from "react-router-dom";
import { Movie } from "../../types";

interface CardProps {
  movie: Movie;
}

export const CardMovie: React.FC<CardProps> = ({ movie = {} as Movie }) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/filme/${movie.id}`)}>
      {movie.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <Overlay />

      <Details>
        <h3>{movie.title}</h3>
        <Synopsis>{movie.overview}</Synopsis>

        <Info>
          <Rating>
            <FaStar color="#FFD700" />
            {movie.vote_average}
          </Rating>

          <Avible>
            <FaPlayCircle />
            {movie.popularity}
          </Avible>
        </Info>
      </Details>
    </CardContainer>
  );
};
