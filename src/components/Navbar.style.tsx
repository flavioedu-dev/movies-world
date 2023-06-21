import { styled } from "styled-components"

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;

  font-weight: 500;
  font-size: 1.3rem;
  font-style: italic;

  cursor: pointer;

  span {
    padding: 1rem;
  }

  span:hover {
    color: var(--primary-color);
    background-color: #fff;
  }
`