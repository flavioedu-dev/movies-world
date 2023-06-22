import { MoviesListRender } from "../components/MoviesListRender";

const UpComingMovies = () => {
  return (
    <MoviesListRender url="https://api.themoviedb.org/3/movie/upcoming" />
  );
};

export default UpComingMovies;