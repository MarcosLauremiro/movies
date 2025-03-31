import { Header } from "../../components/header";
import { PopularMovies } from "../../components/popular";

export const InitialPage: React.FC = () => {
  return (
    <>
      <Header />
      <PopularMovies />
    </>
  );
};
