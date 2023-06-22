import { styled } from "styled-components"

export const MoviesContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  text-align: center;
  width: 80%;
  margin: 0 auto;

  img {
    max-width: 200px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.699) 0px 5px 15px;
    cursor: pointer;
    transition: .3s;
  }

  img:hover {
    transform: scale(1.05);
  }

  p {
    max-width: 20ch;
    font-weight: 500;
  }
`