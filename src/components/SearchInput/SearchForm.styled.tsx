import { styled } from "styled-components";

export const SearchInput = styled.form`

input {
    transition: .3s ease-out;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;

    color: #fff;
    background-color: #000000a1;
    font-size: 1.2rem;

    position: absolute;
    top: 1.2rem;
    right: 50%;
    transform: translateX(50%);
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
`