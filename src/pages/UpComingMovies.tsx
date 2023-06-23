import { MoviesListRender } from "../components/MoviesListRender";

const UpComingMovies = () => {
  return (
    <MoviesListRender url="https://api.themoviedb.org/3/movie/upcoming?language=pt-B" />
  );
};

export default UpComingMovies;