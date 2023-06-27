import "./MoviesListRender.css"

// Custom hooks
import { useGetMovies } from "../../hooks/useGetMovies";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

interface MoviesListRenderProps {
  url: string;
  onclick: (path: string, title: string, overview: string) => void;
}

export const MoviesListRender = ({ url, onclick }: MoviesListRenderProps) => {
  const movies = useGetMovies(url);

  return (
    <Swiper
    slidesPerView={8}
    pagination={{ clickable: true }} 
    className="list_render"
    >
      {movies &&
        movies.map((movie) => (
            <SwiperSlide
              key={movie.id}
              onClick={() =>
                onclick(
                  `${movie.backdrop_path}`,
                  `${movie.title}`,
                  `${movie.overview}`
                )
              }
              className="movie"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.id}`}
              />
              <p>{movie.title}</p>
            </SwiperSlide>
        ))}
    </Swiper>
  );
};
