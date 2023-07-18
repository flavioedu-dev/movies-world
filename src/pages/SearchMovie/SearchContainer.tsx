import { styled } from "styled-components"

export const SearchContainer = styled.section`
max-width: 80%;
margin: 0 auto;
margin-top: 5rem;

display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 3rem;
text-align: center;

img {
  max-width: 15rem;
  height: 22.5rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.699) 0px 5px 15px;
  transition: .3s;
  cursor: pointer;
}

img:hover {
  transform: scale(1.03);
}

div p {
  max-width: 15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: .25rem;
  font-weight: 500;
}
`