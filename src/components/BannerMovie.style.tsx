import { styled } from "styled-components";

export const BannerMovie = styled.section`

position: relative;

h1 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-style: italic;
}

.movie_item {
  width: 100%;
  height: 100vh;
  vertical-align: top;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.699) 0px 5px 15px;
  transition: .5s;
  z-index: 1;
}

.movie_descript {
  opacity: 0;
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

.movies_list {
  width: 100%;
  position: absolute;
  bottom: 0;
}

&:hover {
  .movie_descript {
    opacity: 1;
  }

  & > img {
    filter: opacity(.6);
  }
}

`