import { MoviesListRender } from "../components/MoviesListRender";

const TopRatedMovies = () => {
  return (
    <MoviesListRender url="https://api.themoviedb.org/3/movie/top_rated?language=pt-B" />
  );
};

export default TopRatedMovies;
