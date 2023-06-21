import { useState, useEffect } from "react"

interface movies {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

export const useGetMovies = ( path: string ) => {
    const [moviesList, setMoviesList] = useState<movies[]>([]);
  
    const options = {
      method: "GET",
      accept: "application/json",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmFiYWZlMzAxZWUxN2RiNDA5ZmM3YzJhMjAxNzZiNyIsInN1YiI6IjY0OTFkN2QzYzNjODkxMDBlYjM0NjkxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tr8SiKSYwPdED7QWFJKw0N3PoWUbE2cn11eOxJXK8UU",
      },
    };
  
    const topRatedMoviesList = () => {
      fetch(`${path}`, options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMoviesList(data.results);
        })
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      topRatedMoviesList();
    }, []);

    return moviesList
}