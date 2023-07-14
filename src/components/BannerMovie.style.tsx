import { styled } from "styled-components";

export const BannerMovie = styled.section`

position: relative;

.movie_descript, .movies_list {
  transition: .3s ease-in;
}

h1 {
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
}

.movie_descript {
  opacity: 0;
  position: absolute;
  top: 200px;
  left: 100px;
  letter-spacing: 1px;
  text-shadow: 2px 1px 2px #000;
  font-style: italic;
  z-index: 1;

  max-width: 50%;
}

.movie_descript p {
  margin: 1rem 0 2rem 0;
  font-size: 1.1rem;
  text-align: justify;
}

.btnRedirectMovie {
  background-color: #000000a1;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 1rem;

  border-radius: 1rem;
  text-shadow: none;

  box-shadow: 0.5px 1px 1px 1px #000;
}

.btnRedirectMovie:hover {
  background-color: #000000be;
}

.movies_list {
  width: 100%;
  position: absolute;
  bottom: 0;
  opacity: .1;
}

img {
  z-index: -1;
}

&:hover {
  .movie_descript {
    opacity: 1;
  }

  .movies_list {
    opacity: 1;
  }

  & > img {
    filter: opacity(.6);
  }
}

&:hover::before {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(0, 0, 0, .3);
  z-index: 1;
}

@media (max-width: 1366px) {
  .movie_descript {
    max-width: 60%;
    top: 15%;
    left: 5%;;
  }

  .movie_descript h1 {
    font-size: 2rem;
  }

  .movie_descript p {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .movie_descript {
    max-width: 90%;
    top: 15%;
  }

  .movie_descript h1 {
    font-size: 1.6rem;
  }

}
`