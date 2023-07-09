import { useParams, Link } from "react-router-dom"
import { StyledMovieDetails } from "./MovieDetails.styled"
import { useGetMovieDetails } from "../../hooks/useGetMovieDetails"

const MovieDetails = () => {
  const { id } = useParams()

  const details = useGetMovieDetails(`https://api.themoviedb.org/3/movie/${id?.replace(":", "")}?language=pt-BR`)
  console.log(details)

  return (
    <StyledMovieDetails>
      <Link to="/" className="backToHome">Voltar</Link>

      <img src={`https://image.tmdb.org/t/p/w500/${details?.poster_path}`} alt="cover" />

      <div className="feedback">  
        <span>IMDB {details?.vote_average.toFixed(1)}</span>
        <div>
          <img src="https://img.icons8.com/?size=512&id=8uAtuJQJ4jhd&format=png" alt="" />
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
        <p className="release_date">Lançamento: {details?.release_date.split('-').reverse().join('/')}</p>
      </div>

      <div className="favorite_movie">
        <p>Adicionar favorito</p>
      </div>
    </StyledMovieDetails>
  )
}

export default MovieDetails