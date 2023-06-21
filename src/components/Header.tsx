// Components
import { Navbar } from "./Navbar.style"

interface menuOption{
  name: string;
  onclick?: () => void;
}

const Header = () => {

  const menuOptions: menuOption[] = [
    {
      name: "Home"
    },
    {
      name: "Top Rated"
    }
  ]
  return (
    <header>
      <Navbar>
        {menuOptions.map((menu, key) => (
          <span key={key}>{menu.name}</span>
        ))}
      </Navbar>
    </header>
  )
}

export default Header