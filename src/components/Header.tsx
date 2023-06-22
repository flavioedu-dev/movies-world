// Hooks
import  { useNavigate } from "react-router-dom"

// Components
import { Navbar } from "./Navbar.style"

interface menuOption{
  name: string;
  handleClick?: () => void;
}

const Header = () => {

  const navigate = useNavigate()

  const menuOptions: menuOption[] = [
    {
      name: "Populares",
      handleClick: () => navigate("/")
    },
    {
      name: "Mais votados",
      handleClick: () => navigate("/top-rated")
    },
    {
      name: "Lançamentos",
      handleClick: () => navigate("/upcoming")
    }
  ]
  return (
    <header>
      <Navbar>
        {menuOptions.map((menu, key) => (
          <span key={key} onClick={menu.handleClick}>{menu.name}</span>
        ))}
      </Navbar>
    </header>
  )
}

export default Header