// CSS
import styles from "./App.module.css"

// Component
import Header from "./components/Header";

import { Outlet } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Custom hooks
import { useGetMovies } from "./hooks/useGetMovies";


function App() {

  const movies = useGetMovies("https://api.themoviedb.org/3/movie/now_playing")

  console.log(movies)
  return (
    <section className={styles.App}>
      <h1>Mundo dos Filmes</h1>
      <Swiper
      slidesPerView={3}
      pagination={{ clickable: true }}
      className={styles.movies_container}
      >
        {movies && movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={`${movie.id}`}
              className={styles.movie_item}
            />
        </SwiperSlide>
        ))}
      </Swiper>

      <Header></Header>
      <Outlet />
    </section>
  );
}

export default App;
