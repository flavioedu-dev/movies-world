import { useLocation } from "react-router-dom";
import { SearchForm } from "../../components/SearchInput/SearchInput";
import { useGetMoviesByName } from "../../hooks/useGetMoviesByName";

import { SearchContainer } from "./SearchContainer";

import { useNavigate } from "react-router-dom";

const SearchMovie = () => {
  const navigate = useNavigate()

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const name = queryParams.get("name")
  const moviesByName = useGetMoviesByName(name as string)

  const handleClick = ( id: number ) => {
    navigate(`/movie/:${id}`)
  }

  return (
    <main>
      <SearchForm />
        <SearchContainer>
          {moviesByName.map((movie) => (
            <div key={movie.id} onClick={() => handleClick(movie.id)}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title}`} />
              <p>{movie.title}</p>
            </div>
          ))}
        </SearchContainer>
    </main>
  );
};

export default SearchMovie;
