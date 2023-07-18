import styles from './Header.module.css';

import searchIcon from "../../assets/icons/search-icon.svg"
import xIcon from "../../assets/icons/x-icon.png"
import menuIcon from "../../assets/icons/menu.png"

import { FormEvent, useState } from 'react';

// Components
import { Navbar } from "../Navbar.style";

import { useNavigate } from "react-router-dom"

interface menuOption {
  id: number;
  name: string;
  path: string;
}

interface HeaderProps {
  onclick: (option: string) => void;
}

const Header = ( { onclick }: HeaderProps) => {
  const [optionSelected, setOptionSelected] = useState<number>(1)
  const [controlSearchInput, setControlSearchInput] = useState<number>(0)
  const [controlShowNav, setControlShowNav] = useState<number>(0)

  const navigate = useNavigate()

  const menuOptions: menuOption[] = [
    {
      id: 1,
      name: "Assistidos agora",
      path: "https://api.themoviedb.org/3/movie/now_playing?language=pt-BR",
    },
    {
      id: 2,
      name: "Populares",
      path: "https://api.themoviedb.org/3/movie/popular?language=pt-BR",
    },
    {
      id: 3,
      name: "Mais votados",
      path: "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR",
    },
    {
      id: 4,
      name: "Lançamentos",
      path: "https://api.themoviedb.org/3/movie/upcoming?language=pt-BR",
    },
  ];

  const showSearchInput = () => {
    controlSearchInput === 0 ? setControlSearchInput(1) : setControlSearchInput(0)
  }

  const showNav = () => {
    controlShowNav === 0 ? setControlShowNav(1) : setControlShowNav(0)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchValue = formData.get("search")
    console.log(searchValue)
    navigate(`/movies?name=${searchValue}`)

  }

  return (
    <header className={styles.Header}>
      <Navbar input_control={controlSearchInput} show_nav={controlShowNav}>
      <img src={!controlShowNav ? menuIcon : xIcon} alt="menu-icon" className="menu-nav" onClick={showNav} />
      <div>
        {menuOptions.map((menu) => (
          <span key={menu.id} 
            onClick={() => {
              onclick(`${menu.path}`),
              setOptionSelected(menu.id)
            }
              
            } 
            className={optionSelected === menu.id ? "optionSelected" : ""}
          >
            {menu.name}
          </span>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="searchMovieInput" name="search" placeholder="Buscar filme" className={"showSearchInput"} />
      </form>
      <img src={!controlSearchInput ? searchIcon : xIcon} alt="search-icon" id="searchMovie" onClick={showSearchInput}/>
      </Navbar>
    </header>
  );
};

export default Header;
