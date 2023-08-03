import searchIcon from "../../assets/icons/search-icon.svg";

import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom"

import { SearchForm } from "./SearchForm.styled";


interface SearchFormProps {
  value?: string;
  controlSearchIcon?: number;
}

export const SearchInput = ( { value, controlSearchIcon }: SearchFormProps ) => {
  const [inputValue, setInputValue] = useState(value || "")

  const navigate = useNavigate()

  const searchMovie = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    const searchInput = document.getElementById("searchMovieInput") as HTMLInputElement
    if(searchInput) {
      navigate(`/movies?name=${searchInput.value}`)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <SearchForm onSubmit={searchMovie} $show_search={controlSearchIcon}>
      <div>
        <input type="text" id="searchMovieInput" name="search" value={inputValue} placeholder="Buscar filme" className={"showSearchInput"}  onChange={handleChange}/>
        <img
          src={searchIcon}
          alt="search-icon"
          id="searchMovie"
          onClick={searchMovie}
        />
      </div>
    </SearchForm>
  )
}
