// Styled components
import { MoviesContainer } from "./MoviesContainer.style";

// Custom hooks
import { useGetMovies } from "../hooks/useGetMovies";

interface MoviesListRenderProps {
  url: string;
}

export const MoviesListRender = ( { url }: MoviesListRenderProps) => {
  const movies = useGetMovies(url)

  return (
    <main >
      <MoviesContainer>
        {movies && movies.map((movie) => (
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
}