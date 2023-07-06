import { styled } from "styled-components"

export const Navbar = styled.nav<{ inputcontrol?: number; }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  font-weight: 500;
  font-size: 1.3rem;
  font-style: italic;
  text-shadow: 1px 1px 1px #000;

  cursor: pointer;
  
  span {
    padding: 1rem;
  }

  span:hover {
    border-bottom: 1px solid rgb(0, 0, 0, .5);
  }

  .optionSelected, .optionSelected:hover {
   border-bottom: 1px solid #fff;
  }

  input {
    transition: .3s ease-out;
    opacity: 0;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;

    color: #fff;
    background-color: transparent;
    font-size: 1.2rem;

    position: absolute;
    right: 3.4%;
    box-shadow: inset .5px 1px 1px 1px #000;
    outline: none;
  }

  input::placeholder {
    color: #fff;
    font-size: 1rem;
    font-style: italic;
    text-shadow: .5px .5px 1px #000;
  }

  input:focus {
    background-color: rgb(0, 0, 0, .3);
  }

  input:focus,
  input:hover {
    border-color: #666;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  img {
    transition: .3s linear;
    max-width: 50px;
    position: absolute;
    top: .3rem;
    right: 3%;
    border-radius: 50%;
    padding: 10px;
    box-shadow: ${(props) => (
      props.inputcontrol === 0 ? ".5px .5px 1.5px #000" : "none"
    )}
  }

  .showSearchInput {
    opacity: ${(props) => (
      props.inputcontrol === 1 ? "1" : "0"
    )}
  }
`