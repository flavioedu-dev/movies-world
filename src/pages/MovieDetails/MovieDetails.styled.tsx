import { styled } from "styled-components";

export const StyledMovieDetails = styled.section<{ $control_load?: boolean; }>`

width: 100%;

> img {
  max-width: 100%;
  max-height: 100%;
  position: ${(props) => (
    props.$control_load ? "absolute" : "relative"
  )};
  opacity: ${(props) => (
    props.$control_load ? "0" : "1"
  )};
}

.skeleton_details {
  width: 90rem;
  max-width: 500px;
  height: 750px;
  background-color: #272836;
}

.details-container {
  position: relative;
  padding: 0 1.5rem;
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
  column-gap: 1rem;
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
  bottom: 1.2rem;
  right: .7rem;
}

@media (min-width: 501px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
}


@media (min-width: 1050px) {
  max-width: 90%;
  margin: 0 auto;

  height: 100vh;
  flex-direction: row;
  align-items: center;

  > img{
    max-height: 80vh;
    box-shadow: rgba(0, 0, 0, 0.822) 0px 3px 8px;
  }

  .favorite_movie {
    position: sticky;
  }

  .descript h1 {
    font-size: 1.7rem;
  }

  .descript p {
    font-size: 1rem;
  }
}

@media (min-width: 1200px) {
  max-width: 75%;

  .descript {
    margin-bottom: 2.5rem;
  }
}

@media (max-width: 1366px) {
  .skeleton_details {
    height: 80%;
  }
}

@media (max-width: 1200px) {
  width: 75%;

  .skeleton_details {
    width: 210%;
    height: 80%;
  }
}

@media (max-width: 1049px) {
  .skeleton_details {
    width: 500px;
    height: 750px;
  }
}



@media (max-width: 600px) {
  .descript h1 {
    font-size: 1.5rem;
  }

  .descript ul {
    column-gap: 1rem;
  }

  .skeleton_details {
    width: 450px;
    height: 675px;
  }
}

@media (max-width: 520px) {
  width: 100vw;

  .skeleton_details {
    width: 416px;;
    height: 624px;
  }
}

@media (max-width: 500px) {
  .skeleton_details {
    width: 500px;
    height: 750px;
  }
}

@media (max-width: 420px) {
  .skeleton_details {
    width: 100%;
    max-height: 70vh;
  }
}
`