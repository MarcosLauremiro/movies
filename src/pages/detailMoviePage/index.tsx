import React from "react";
import { MovieDetails } from "../../components/movieDetails";
import { Header } from "../../components/header";

export const MoviePageDetail: React.FC = () => {
  return (
    <>
      <Header />
      <MovieDetails />
    </>
  );
};
