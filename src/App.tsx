import styles from "./App.module.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Custom hooks
import { useGetMovies, movies } from "./hooks/useGetMovies";

// Hooks
import { useState, useEffect } from "react"

// Component
import Header from "./components/Header/Header";
import { BannerMovie } from "./components/BannerMovie";
import { MoviesListRender } from "./components/MoviesListRender";

function App() {

  const movies: movies[] = useGetMovies(
    "https://api.themoviedb.org/3/movie/now_playing?language=pt-BR"
  );
  
  console.log(movies);
  console.log(movies[0]);
  const [banner, setBanner] = useState<string>();
  console.log("banner: ", banner);

  useEffect(() => {
    setBanner(`${movies[0]?.backdrop_path}`);
  }, [movies])

  return (
    <section className={styles.App}>
      <Header></Header>
      <BannerMovie>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="movies_container"
        >
          {movies &&
            movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${banner}`}
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
            <div className="movies_list">
              <MoviesListRender url="https://api.themoviedb.org/3/movie/now_playing?language=pt-BR" onclick={(path: string) => setBanner(path)}/>
            </div>
      </BannerMovie>
    </section>
  );
}

export default App;
