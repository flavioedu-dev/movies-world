import { useState, useEffect } from "react"

export interface MovieDetails {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

export const useGetMovieDetail = ( path: string ): MovieDetails | null => {
  const [movieDetails, setMoviesDetails] = useState<MovieDetails | null>(null);

  const options = {
    method: "GET",
    accept: "application/json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmFiYWZlMzAxZWUxN2RiNDA5ZmM3YzJhMjAxNzZiNyIsInN1YiI6IjY0OTFkN2QzYzNjODkxMDBlYjM0NjkxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tr8SiKSYwPdED7QWFJKw0N3PoWUbE2cn11eOxJXK8UU",
    },
  };

  try {
    const getMovieDetails = () => {
      fetch(`${path}`, options)
        .then((res) => res.json())
        .then((data) => {
          setMoviesDetails(data.results);
        })
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      getMovieDetails();
    }, []);

    return movieDetails
  } catch (error) {
    console.log(error)
    return null
  }
}