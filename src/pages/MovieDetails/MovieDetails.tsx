import { StyledMovieDetails } from "./MovieDetails.styled"

const MovieDetails = () => {
  return (
    <StyledMovieDetails>
      <img src="https://image.tmdb.org/t/p/w500/88OGFOcFI04CL4uucb6I7ZzUqD6.jpg" alt="cover" />

      <div className="feedback">
        <span>IMDB 6.8</span>
        <div>
          <img src="https://img.icons8.com/?size=512&id=8uAtuJQJ4jhd&format=png" alt="" />
          <span>4.8</span>
        </div>
      </div>

      <div className="descript">
        <h1>Elementos</h1>
        <ul>
          <li>Ação</li>
          <li>Comédia</li>
          <li>Heróis</li>
        </ul>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, aliquam voluptas? Exercitationem eveniet reprehenderit ad necessitatibus fuga, architecto, totam labore aliquam voluptatibus iste dignissimos, earum magni tempora repudiandae hic cupiditate?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat at commodi praesentium, officiis cum explicabo laborum dolore sit ratione adipisci mollitia voluptatibus error eaque, voluptates ex autem earum dolores facilis!
        </p>
      </div>

      <div className="favorite_movie">
        <p>Adicionar favorito</p>
      </div>
    </StyledMovieDetails>
  )
}

export default MovieDetails