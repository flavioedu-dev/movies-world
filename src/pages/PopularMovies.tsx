import { MoviesListRender } from "../components/MoviesListRender";

const PopularMovies = () => {
  return <MoviesListRender url="https://api.themoviedb.org/3/movie/popular?language=pt-B" />;
};

export default PopularMovies;
