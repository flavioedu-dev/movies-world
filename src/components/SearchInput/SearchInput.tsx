import { FormEvent } from "react";
import { useNavigate } from "react-router-dom"

import { SearchInput } from "./SearchForm.styled";

export const SearchForm = () => {
  const navigate = useNavigate()

  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchValue = formData.get("search")
    navigate(`/movies?name=${searchValue}`)

  }
  return (
    <SearchInput onSubmit={handleSubmit}>
      <input type="text" id="searchMovieInput" name="search" placeholder="Buscar filme" className={"showSearchInput"} />
    </SearchInput>
  )
}
