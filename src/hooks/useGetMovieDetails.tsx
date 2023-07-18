import { useState, useEffect } from "react"

export interface MovieDetails {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genres: {
    id: number,
    name: string
  }[];
  vote_average: number;
  vote_count: number;
}

export const useGetMovieDetails = ( path: string): MovieDetails | null => {
  const REACT_API_BEARER = import.meta.env.VITE_API_BEARER

  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  const options = {
    method: "GET",
    accept: "application/json",
    headers: {
      Authorization:
        `Bearer ${REACT_API_BEARER}`,
    },
  };

  try {
    const getMovieDetails = () => {
      fetch(`${path}`, options)
        .then((res) => res.json())
        .then((data) => {
          setMovieDetails(data);
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