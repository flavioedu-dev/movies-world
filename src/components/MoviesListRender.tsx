// Styled components
import { MoviesContainer } from "./MoviesContainer.style";

// Custom hooks
import { useGetMovies } from "../hooks/useGetMovies";


interface MoviesListRenderProps {
  url: string;
  onclick:(path: string, title: string, overview: string) => void;
}

export const MoviesListRender = ( { url, onclick }: MoviesListRenderProps) => {
  const movies = useGetMovies(url)

  return (
    <main >
      <MoviesContainer>
        {movies && movies.map((movie) => (
          <div key={movie.id} onClick={() => onclick(`${movie.backdrop_path}`, `${movie.title}`, `${movie.overview}`)}>
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