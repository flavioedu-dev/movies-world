// Custom hooks
import { useGetMovies, movies } from "../hooks/useGetMovies";

// Hooks
import { useState, useEffect } from "react";

// Component
import Header from "../components/Header/Header";
import { BannerMovie } from "../components/BannerMovie.style";
import { MoviesListRender } from "../components/MovieListRender/MoviesListRender";

interface BannerMovie {
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
      url_banner: `${movies[0]?.backdrop_path}`,
      title: `${movies[0]?.title}`,
      overview: `${movies[0]?.overview}`,
    });

  }, [movies]);

  return (
    <section>
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
        </div>
        <div className="movies_list">
          <MoviesListRender
            url={`${urlRenderMovies}`}
            onclick={(path: string, title: string, overview: string) =>
              setDataBanner({
                url_banner: path,
                title,
                overview,
              })
            }
          />
        </div>
      </BannerMovie>
    </section>
  );
};

export default Home;
