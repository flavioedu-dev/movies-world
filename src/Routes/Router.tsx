import App from "../App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import PopularMovies from "../pages/PopularMovies.tsx";
import TopRatedMovies from "../pages/TopRatedMovies.tsx";
import UpComingMovies from "../pages/UpComingMovies.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/top-rated" element={<TopRatedMovies />} />
          <Route path="/upcoming" element={<UpComingMovies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
