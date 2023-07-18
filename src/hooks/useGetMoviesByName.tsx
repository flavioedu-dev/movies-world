import { useState, useEffect } from "react"

export interface movies {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

export const useGetMoviesByName = ( name: string ): movies[] => {
  const REACT_API_KEY = import.meta.env.VITE_API_KEY
  const REACT_API_BEARER = import.meta.env.VITE_API_BEARER

  const [moviesByNameList, setMoviesByNameList] = useState<movies[]>([]);

  const options = {
    method: "GET",
    accept: "application/json",
    headers: {
      Authorization:
        `Bearer ${REACT_API_BEARER}`,
    },
  };

  try {
    const getMoviesByName = () => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_API_KEY}&query=${name}&language=pt-BR`, options)
        .then((res) => res.json())
        .then((data) => {
          setMoviesByNameList(data.results);
        })
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      getMoviesByName();
    }, [name]);

    return moviesByNameList
  } catch (error) {
    console.log(error)
    return []
  }
}