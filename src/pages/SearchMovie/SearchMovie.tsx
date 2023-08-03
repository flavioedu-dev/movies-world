import { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useGetMoviesByName } from "../../hooks/useGetMoviesByName";

// Components
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { SearchContainer } from "./SearchContainer";
import { BackButton } from "../../components/BackButton/BackButton";

import { Skeleton } from "@mui/material";

const SearchMovie = () => {
  const navigate = useNavigate();

  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages((prevLoadedImages) => ({
      ...prevLoadedImages,
      [imageUrl]: true,
    }));
  };

  const handleImageError = (imageUrl: string) => {
    setLoadedImages((prevLoadedImages) => ({
      ...prevLoadedImages,
      [imageUrl]: false,
    }));
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  const moviesByName = useGetMoviesByName(name || "");

  const handleClick = (id: number) => {
    navigate(`/movie/:${id}`);
  };

  return (
    <main>
      <BackButton>Voltar</BackButton>
      <SearchInput value={name || ""} />
      <SearchContainer>
        {moviesByName.map((movie) => (
          <div
            key={movie.id}
            onClick={() => handleClick(movie.id)}
            style={{
              pointerEvents: loadedImages[
                `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              ]
                ? "all"
                : "none",
            }}
          >
            {loadedImages[
              `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            ] ? null : (
              <Skeleton
                variant="rectangular"
                animation="pulse"
                className="skeleton_cover"
              />
            )}
            <img
              style={{
                display: loadedImages[
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                ]
                  ? "block"
                  : "none",
              }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title}`}
              onLoad={() =>
                handleImageLoad(
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                )
              }
              onError={() =>
                handleImageError(
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                )
              }
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </SearchContainer>
    </main>
  );
};

export default SearchMovie;
