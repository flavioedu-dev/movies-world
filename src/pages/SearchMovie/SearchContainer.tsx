import { styled } from "styled-components"

export const SearchContainer = styled.section`
max-width: 80%;
margin: 5rem auto;

display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 3rem;
text-align: center;

img, .skeleton_cover {
  max-width: 15rem;
  height: 22.5rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.699) 0px 5px 15px;
  transition: .3s;
  cursor: pointer;
}

.skeleton_cover {
    width: 240px;
    height: 360px;  
  }

img:hover {
  transform: scale(1.03);
}

.skeleton_cover {
  background-color: #272836;
}

div p {
  max-width: 15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: .25rem;
  font-weight: 500;
}

@media (max-width: 1440px) {
  max-width: 90%;
}

@media (max-width: 925px) {
  img {
    max-width: 12rem;
    height: 18rem;
  }

  .skeleton_cover {
    width: 192px;
    height: 288px;  
  }

  div p {
    max-width: 12rem;
  }
}

@media (max-width: 768px) {
  img {
    max-width: 10rem;
    height: 15rem;
  }

  .skeleton_cover  {
    width: 160px;
    height: 240px;
  }

  div p {
    max-width: 10rem;
  }
}

@media (max-width: 420px) {
  img {
    max-width: 8rem;
    height: 13rem;
  }

  .skeleton_cover {
    width: 128px;
    height: 208px;
  }

  div p {
    max-width: 8rem;
  }
}
`