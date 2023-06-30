import "./MoviesListRender.css"

// Hooks
import { useEffect, useState } from "react";

// Custom hooks
import { useGetMovies } from "../../hooks/useGetMovies";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

interface MoviesListRenderProps {
  url: string;
  onclick: (path: string, title: string, overview: string) => void;
}

export const MoviesListRender = ({ url, onclick }: MoviesListRenderProps) => {
  const [selectedMovie, setSelectedMovie] = useState<number>()
  const [numberPerView, setNumberPerView] = useState<number>(8)

  const movies = useGetMovies(url);

  useEffect(() => {
    setSelectedMovie(movies[0]?.id)
  }, [movies])

  useEffect(() => {
    function handleResize(){
      if(window.innerWidth < 1400) {
        setNumberPerView(6)
      }else {
        setNumberPerView(8)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <Swiper
    slidesPerView={numberPerView}
    pagination={{ clickable: true }} 
    className="list_render"
    >
      {movies &&
        movies.map((movie) => (
            <SwiperSlide
              key={movie.id}
              onClick={() =>{
                onclick(
                  `${movie.backdrop_path}`,
                  `${movie.title}`,
                  `${movie.overview}`
                )
                setSelectedMovie(movie?.id)
              }
              }
              className={selectedMovie === movie.id ? "movie selected" : "movie"}
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
