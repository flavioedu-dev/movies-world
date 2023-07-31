import { styled } from "styled-components"

export const StyledBackButton = styled.button`

box-shadow: #0000008b 0px 5px 15px;
background: linear-gradient(to right, rgb(211, 176, 51) 10%, rgb(224, 196, 94) 90%);
color: #000;
font-size: 1rem;
font-weight: 550;
letter-spacing: .5px;
cursor: pointer;

padding: .5rem 1rem;
border: none;
border-radius: 3rem;
z-index: 1;

position: fixed;
top: 2%;
left: 3%;
font-weight: 550;

@media (min-width: 1050px) {
  top: 4%;
  left: 3%;
  padding: .7rem 1.4rem;
}
`