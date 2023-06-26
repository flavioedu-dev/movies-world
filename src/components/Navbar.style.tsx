import { styled } from "styled-components"

export const Navbar = styled.nav`
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
    color: var(--primary-color);
    text-shadow: 1px 1px 1px #fff;
  }
`