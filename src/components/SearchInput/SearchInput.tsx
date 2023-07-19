import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom"

import { SearchInput } from "./SearchForm.styled";

interface SearchFormProps {
  value?: string;
}

export const SearchForm = ( { value }: SearchFormProps ) => {
  const [inputValue, setInputValue] = useState(value || "")

  const navigate = useNavigate()
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchValue = formData.get("search")
    navigate(`/movies?name=${searchValue}`)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <SearchInput onSubmit={handleSubmit}>
      <input type="text" id="searchMovieInput" name="search" value={inputValue} placeholder="Buscar filme" className={"showSearchInput"}  onChange={handleChange}/>
    </SearchInput>
  )
}
