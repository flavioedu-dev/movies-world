import { styled } from "styled-components";

export const StyledMovieDetails = styled.section`

img {
  max-width: 100%;
}

.details-container {
  position: relative;
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
  box-shadow: 0.5px .5px 1px 1px #0000006e;
  font-weight: 450;
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

.descript {
  margin-bottom: 5rem;
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
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-indent: 1rem;
}

.descript .release_date {
  color: #ffffff96;
  text-indent: 0rem;
  margin-top: .5rem;
  font-size: 1rem;
}

.favorite_movie { 
  position: fixed;
  bottom: 1.2rem;
  right: .7rem;

  background: linear-gradient(to right, rgb(211, 176, 51) 10%, rgb(224, 196, 94) 90%);
  color: #000;
  font-size: 1rem;
  font-weight: 500;

  padding: .5rem 1rem;
  border-radius: 3rem;
  border: none;
}

@media (min-width: 501px) {

  max-width: 70%;
  margin: 0 auto;
}
`