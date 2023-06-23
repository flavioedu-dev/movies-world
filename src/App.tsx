  // Component
import Header from "./components/Header";

import { Outlet } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Custom hooks
import { useGetMovies } from "./hooks/useGetMovies";

import { BannerMovie } from "./components/BannerMovie";


function App() {

  const movies = useGetMovies("https://api.themoviedb.org/3/movie/now_playing?language=pt-BR")

  console.log(movies)
  return (
    <section>
      <BannerMovie>
        <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="movies_container"
        >
          {movies && movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={`${movie.id}`}
                className="movie_item"
              />
              <div className="movie_descript">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
              </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </BannerMovie>

      <Header></Header>
      <Outlet />
    </section>
  );
}

export default App;
