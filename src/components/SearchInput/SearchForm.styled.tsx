import { styled } from "styled-components";

export const SearchForm= styled.form<{ $show_search?: number; }>`

> div {
  position: absolute;
  top: .75rem;
  right: 3.4%;
}

input {
  transition: .3s ease-out;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;

  color: #fff;
  background-color: #000000a1;
  font-size: 1.2rem;
  text-indent: 2.5rem;

  box-shadow: inset .5px 1px 1px 1px #000;
  outline: none;
}

input::placeholder {
  color: #fff;
  font-size: 1rem;
  font-style: italic;
  text-shadow: .5px .5px 1px #000;
}

input:focus,
input:hover {
  border-color: #666;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

#searchMovie {
  position: absolute;
  left: 5px;
  max-width: 2rem;
  top: 10%;
  transition: .3s ease-out;
  opacity: ${(props) => (
    props.$show_search ? 1 : 0
  )};
  cursor: pointer;
}

@media (max-width: 1200px) and (min-width: 1101px) {
  input {
    max-width: 200px;
  }
}

@media (max-width: 1100px) {
  > div {
    top: 1.2rem;
  }
}

@media (max-width: 380px) {
  input {
    max-width: 220px;
  }
}
`