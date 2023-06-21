import styles from "./TopRatedMovies.module.css";

// Styled components
import { MoviesContainer } from "../../components/MoviesContainer.style";

// Custom hooks
import { useGetMovies } from "../../hooks/useGetMovies";


const TopRatedMovies = () => {
  const movies = useGetMovies("https://api.themoviedb.org/3/movie/top_rated")

  return (
    <main className={styles.TopRatedMovies}>
      <h1>Top Rated Movies</h1>

      <MoviesContainer>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.id}`}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </MoviesContainer>
    </main>
  );
};

export default TopRatedMovies;
