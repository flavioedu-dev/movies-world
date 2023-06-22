import { MoviesListRender } from "../components/MoviesListRender";

const PopularMovies = () => {
  return <MoviesListRender url="https://api.themoviedb.org/3/movie/popular" />;
};

export default PopularMovies;
