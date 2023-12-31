import App from "../App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.tsx";
import MovieDetails from "../pages/MovieDetails/MovieDetails.tsx";
import SearchMovie from "../pages/SearchMovie/SearchMovie.tsx";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movies" element={<SearchMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
