import styles from "./Header.module.css";

import searchIcon from "../../assets/icons/search-icon.svg";
import xIcon from "../../assets/icons/x-icon.png";
import menuIcon from "../../assets/icons/menu.png";

import { useState } from "react";

// Components
import { Navbar } from "../Navbar.style";
import { SearchInput } from "../SearchInput/SearchInput.tsx";

interface menuOption {
  id: number;
  name: string;
  path: string;
}

interface HeaderProps {
  onclick: (option: string) => void;
}

const Header = ({ onclick }: HeaderProps) => {
  const [optionSelected, setOptionSelected] = useState<number>(1);
  const [controlSearchInput, setControlSearchInput] = useState<number>(0);
  const [controlShowNav, setControlShowNav] = useState<number>(0);

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
    controlSearchInput === 0
      ? setControlSearchInput(1)
      : setControlSearchInput(0);
  };

  const showNav = () => {
    controlShowNav === 0 ? setControlShowNav(1) : setControlShowNav(0);
  };

  return (
    <header className={styles.Header}>  
      <Navbar $input_control={controlSearchInput} $show_nav={controlShowNav}>
        <img
          src={!controlShowNav ? menuIcon : xIcon}
          alt="menu-icon"
          className="menu-nav"
          onClick={showNav}
        />
        <div>
          {menuOptions.map((menu) => (
            <span
              key={menu.id}
              onClick={() => {
                onclick(`${menu.path}`), setOptionSelected(menu.id);
              }}
              className={optionSelected === menu.id ? "optionSelected" : ""}
            >
              {menu.name}
            </span>
          ))}
        </div>
        <SearchInput controlSearchIcon={controlSearchInput} />
        <img
          src={!controlSearchInput ? searchIcon : xIcon}
          alt="search-or-closed"
          id="searchOrClosed"
          onClick={showSearchInput}
        />
      </Navbar>
    </header>
  );
};

export default Header;
