// Custom hooks
import { useGetMovies, movies } from "../hooks/useGetMovies";

// Hooks
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Component
import Header from "../components/Header/Header";
import { BannerMovie } from "../components/BannerMovie.style";
import { MoviesListRender } from "../components/MovieListRender/MoviesListRender";

interface BannerMovie {
  movieId: number;
  url_banner: string;
  title: string;
  overview: string;
}

const Home = () => {
  const [urlRenderMovies, setUrlRenderMovies] = useState<string>("https://api.themoviedb.org/3/movie/now_playing?language=pt-BR")
  const [dataBanner, setDataBanner] = useState<BannerMovie>();

  const movies: movies[] = useGetMovies(urlRenderMovies);

  useEffect(() => {
    setDataBanner({
      movieId: movies[0]?.id,
      url_banner: `${movies[0]?.backdrop_path}`,
      title: `${movies[0]?.title}`,
      overview: `${movies[0]?.overview}`,
    });

    const movieList = document.querySelector(".swiper-wrapper") as HTMLElement;
    if(movieList) {
      movieList.style.transform = "translate3d(0px, 0px, 0px)"
      movieList.style.transitionDuration = "0ms"
    }
  }, [movies]);

  return (
    <>
      <Header onclick={(option: string) => setUrlRenderMovies(option)}/>
      <BannerMovie>
        <img
          className="movie_item"
          src={`https://image.tmdb.org/t/p/original${dataBanner?.url_banner}`}
          alt="banner"
        />
        <div className="movie_descript">
            <h1>{dataBanner?.title}</h1>
            <p>{dataBanner?.overview}</p>
            <Link to={`/movie/:${dataBanner?.movieId}`} className="btnRedirectMovie">Ver filme</Link>
        </div>
        <div className="movies_list">
          <MoviesListRender
            url={`${urlRenderMovies}`}
            onclick={(id: number, path: string, title: string, overview: string) =>
              setDataBanner({
                movieId: id,
                url_banner: path,
                title,
                overview,
              })
            }
          />
        </div>
      </BannerMovie>
    </>
  );
};

export default Home;
