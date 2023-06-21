import App from "../App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import TopRatedMovies from "../pages/TopRatedMovies/TopRatedMovies.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRatedMovies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
