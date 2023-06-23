import { styled } from "styled-components";

export const BannerMovie = styled.section`

h1 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-style: italic;
}

.movies_container {
  width: 100%;
  max-height: 80vh;
}

.movie_item {
  width: 100%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.699) 0px 5px 15px;
  cursor: pointer;
  transition: .3s;
}
  
.movie_descript {
  display: none;
  position: absolute;
  top: 200px;
  left: 100px;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px #000;
}

.movie_descript p {
  max-width: 50%;
  font-size: 1.1rem;
  text-align: justify;
}

&:hover {
  .movie_descript {
    display: block;
  }

  img {
    filter: opacity(.6);
  }
}
`