import { useState } from "react";
import { useParams } from "react-router-dom";
import { StyledMovieDetails } from "./MovieDetails.styled";
import { useGetMovieDetails } from "../../hooks/useGetMovieDetails";

import { BackButton } from "../../components/BackButton/BackButton";

// MUI
import { Skeleton } from "@mui/material";

const MovieDetails = () => {
  const { id } = useParams();

  const [loadingCover, setLoadingCover] = useState<boolean>(true);

  const details = useGetMovieDetails(
    `https://api.themoviedb.org/3/movie/${id?.replace(":", "")}?language=pt-BR`
  );

  return (
    <StyledMovieDetails $control_load={loadingCover}>
      <BackButton>
        Voltar
      </BackButton>

      {loadingCover && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          className="skeleton_details"
        />
      )}
      {details && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt="cover"
          onLoad={() => setLoadingCover(false)}
          onError={() => setLoadingCover(true)}
        />
      )}

      <section className="details-container">
        <div className="feedback">
          <span>IMDB {details?.vote_average.toFixed(1)}</span>
          <div>
            <img
              src="https://img.icons8.com/?size=512&id=8uAtuJQJ4jhd&format=png"
              alt=""
            />
            <span>{details?.vote_count}</span>
          </div>
        </div>

        <div className="descript">
          <h1>{details?.title}</h1>
          <ul>
            {details?.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p>{details?.overview}</p>
          <p className="release_date">
            Lançamento: {details?.release_date.split("-").reverse().join("/")}
          </p>
        </div>
    
        <BackButton favoriteClass="favorite_movie">
          Adicionar Favorito
        </BackButton>
      </section>
    </StyledMovieDetails>
  );
};

export default MovieDetails;
