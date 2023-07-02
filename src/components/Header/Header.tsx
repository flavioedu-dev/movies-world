import styles from './Header.module.css';

import searchIcon from "../../assets/icons/search-icon.svg"

// Components
import { Navbar } from "../Navbar.style";

interface menuOption {
  name: string;
  path: string;
}

interface HeaderProps {
  onclick: (option: string) => void;
}

const Header = ( { onclick }: HeaderProps) => {

  const menuOptions: menuOption[] = [
    {
      name: "Assistidos agora",
      path: "https://api.themoviedb.org/3/movie/now_playing?language=pt-BR",
    },
    {
      name: "Populares",
      path: "https://api.themoviedb.org/3/movie/popular?language=pt-BR",
    },
    {
      name: "Mais votados",
      path: "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR",
    },
    {
      name: "Lançamentos",
      path: "https://api.themoviedb.org/3/movie/upcoming?language=pt-BR",
    },
  ];
  return (
    <header className={styles.Header}>
      <Navbar>
      <div>
        {menuOptions.map((menu, key) => (
          <span key={key} onClick={() => onclick(`${menu.path}`)}>
            {menu.name}
          </span>
        ))}
      </div>
      <input type="text" id="searchMovie" name="search" placeholder="Buscar filme" />
      <img src={searchIcon} alt="search-icon" />
      </Navbar>
    </header>
  );
};

export default Header;
