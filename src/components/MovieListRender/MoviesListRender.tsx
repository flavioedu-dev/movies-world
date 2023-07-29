import "./MoviesListRender.css"

// Hooks
import { useEffect, useState } from "react";

// Custom hooks
import { useGetMovies } from "../../hooks/useGetMovies";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// MovieProps
import { movies } from "../../hooks/useGetMovies";

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
      if(window.innerWidth > 1366) {
        setNumberPerView(8)
      }else if (window.innerWidth < 390){
        setNumberPerView(2)
      }else if (window.innerWidth < 501){
        setNumberPerView(2)
      }else if (window.innerWidth < 730){
        setNumberPerView(3)
      }else if (window.innerWidth < 840){
        setNumberPerView(4)
      }else if (window.innerWidth < 1150){
        setNumberPerView(5)
      }else if (window.innerWidth <= 1366){
        setNumberPerView(7)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  const handleClick = (movie: movies): void=> {
    onclick(
      movie.id,
      `${movie.backdrop_path}`,
      `${movie.title}`,
      `${movie.overview}`
    )
    setSelectedMovie(movie?.id) 
  }

  return (
    <>
    <Swiper
    slidesPerView={numberPerView}
    pagination={{ clickable: true }} 
    className="list_render"
    >
      {movies && movies.map((movie) => (
            <SwiperSlide
              key={movie.id}
              onClick={() => handleClick(movie)}
              onTouchEnd={() => handleClick(movie)}
              className={selectedMovie === movie.id ? "movie selected" : "movie"}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.id}`}
              />
            </SwiperSlide>
        ))}
    </Swiper>
    </>
  );
};
