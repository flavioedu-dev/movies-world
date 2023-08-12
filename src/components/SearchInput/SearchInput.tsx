// Icons
import searchIcon from "../../assets/icons/search-icon.svg";

// Hooks and Types
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom"

// Components
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
    if(inputValue) {
      navigate(`/movies?name=${inputValue}`)
    }
  }

  const changeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <SearchForm onSubmit={searchMovie} $show_search={controlSearchIcon} $homepage={value}>
      <div>
        <input type="text" id="searchMovieInput" name="search" value={inputValue} placeholder="Buscar filme" className={"showSearchInput"}  onChange={changeSearchInput}/>
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
