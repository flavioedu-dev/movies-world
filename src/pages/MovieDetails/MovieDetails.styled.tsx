import { styled } from "styled-components";

export const StyledMovieDetails = styled.section`

img {
  max-width: 100%;
}

& > div {
  padding: 0 1.5rem;
}

.backToHome {
  position: fixed;
  top: 2%;
  left: 3%;
  background: linear-gradient(to right, rgb(211, 176, 51) 10%, rgb(224, 196, 94) 90%);
  color: #000;
  text-decoration: none;
  padding: .5rem 1rem;
  border-radius: 3rem;
}

.feedback {
  margin: .5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.feedback > span:nth-child(1) {
  background: linear-gradient(to right, rgb(211, 176, 51) 10%, rgb(224, 196, 94) 90%);
  padding: .5rem 1rem;
  border-radius: 3rem;
  color: #000;
  font-weight: 500;
}

.feedback span:nth-child(2) {
  color: rgb(250, 196, 0);
}

.feedback > div {
  display: flex;
  align-items: center;
  padding: .4rem 0;
}

.feedback > div img {
  width: 1.5rem;
  margin-right: .3rem;
}

.descript h1 {
  font-size: 2rem;
}

.descript ul {
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 1rem;
  margin: 1.2rem 0;
}

.descript ul li {
  list-style: none;
  background-color: #33343c;
  padding: .5rem 1rem;
  border-radius: 3rem;
}

.descript p {
  text-align: justify;
  margin-bottom: 5rem;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-indent: 1rem;
}

.favorite_movie {
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: .5rem;
  width: 100%;
}

.favorite_movie p {
  background: linear-gradient(to right, rgb(211, 176, 51) 10%, rgb(224, 196, 94) 90%);
  color: #000;
  font-weight: 500;
  padding: .5rem 1rem;
  border-radius: 3rem;
}
`