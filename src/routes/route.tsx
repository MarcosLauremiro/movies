import { Route, Routes } from "react-router-dom";
import { InitialPage } from "../pages/initialPage";
import { MoviePageDetail } from "../pages/detailMoviePage";

export const RouterMain: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/filme/:id" element={<MoviePageDetail />} />
    </Routes>
  );
};
