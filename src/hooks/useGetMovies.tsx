import { useState, useEffect } from "react"

export interface movies {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

export const useGetMovies = ( path: string ): movies[] => {
  const REACT_API_BEARER = import.meta.env.VITE_API_BEARER

  const [moviesList, setMoviesList] = useState<movies[]>([]);

  const options = {
    method: "GET",
    accept: "application/json",
    headers: {
      Authorization:
        `Bearer ${REACT_API_BEARER}`,
    },
  };

  try {
    const topRatedMoviesList = () => {
      fetch(`${path}`, options)
        .then((res) => res.json())
        .then((data) => {
          setMoviesList(data.results);
        })
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      topRatedMoviesList();
    }, [path]);

    return moviesList
  } catch (error) {
    console.log(error)
    return []
  }
}