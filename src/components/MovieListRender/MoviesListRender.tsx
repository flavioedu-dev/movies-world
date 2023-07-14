import "./MoviesListRender.css"

// Hooks
import { useEffect, useState } from "react";

// Custom hooks
import { useGetMovies } from "../../hooks/useGetMovies";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

interface MoviesListRenderProps {
  url: string;
  onclick: (id: number, path: string, title: string, overview: string) => void;
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
      if(window.innerWidth > 1280) {
        setNumberPerView(8)
      }else if (window.innerWidth < 390){
        setNumberPerView(1)
      }else if (window.innerWidth < 501){
        setNumberPerView(2)
      }else if (window.innerWidth < 769){
        setNumberPerView(3)
      }else if (window.innerWidth < 1050){
        setNumberPerView(5)
      }else if (window.innerWidth < 1280){
        setNumberPerView(7)
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
                  movie.id,
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
