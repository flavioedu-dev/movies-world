import { useState, useEffect } from "react"

interface movies {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

function App() {

  const [topRatedMovies, setTopRatedMovies]= useState<movies[]>([])

  const options = {
        method: "GET",
        accept: 'application/json',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmFiYWZlMzAxZWUxN2RiNDA5ZmM3YzJhMjAxNzZiNyIsInN1YiI6IjY0OTFkN2QzYzNjODkxMDBlYjM0NjkxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tr8SiKSYwPdED7QWFJKw0N3PoWUbE2cn11eOxJXK8UU'
        }
      }

  const topRatedMoviesList = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated", options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setTopRatedMovies(data.results)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    topRatedMoviesList()
  }, [])

  return (
    <>
      <h1>Filmes</h1>
      {topRatedMovies.map(movie => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.id}`} />
        </div>
      ))}
    </>
  )
}

export default App
