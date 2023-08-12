import { styled } from "styled-components"

export const Navbar = styled.nav<{ $input_control?: number; $show_nav?: number; }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  font-weight: 500;
  font-size: 1.3rem;
  font-style: italic;
  text-shadow: 1px 1px 1px #000;

  .menu-nav {
    display: none;
  }
  
  span {
    padding: 1rem;
  }

  span:hover {
    border-bottom: 1px solid rgb(0, 0, 0, 1);
    cursor: pointer;
  }

  .optionSelected, .optionSelected:hover {
   border-bottom: 1px solid #fff;
  }

  > img {
    background-color: ${(props) => (
      props.$input_control === 0 ? "#000000a1" : "none"
    )};
    transition: .3s linear;
    max-width: 50px;
    position: absolute;
    top: .4rem;
    right: 3%;
    border-radius: 50%;
    padding: 10px;
    box-shadow: ${(props) => (
      props.$input_control === 0 ? ".5px .5px 1.5px #000" : "none"
    )};
    cursor: pointer;
  }

  .showSearchInput {
    opacity: ${(props) => (
      props.$input_control === 1 ? "1" : "0"
    )};
    
    pointer-events: ${(props) => (
      props.$input_control === 1 ? "all" : "none"
    )};

  }

  @media (max-width: 1200px) {
    .menu-nav {
      display: block;
      background-color: ${(props) => (
        props.$show_nav === 1 ? "transparent" : "#000000a1"  
      )};
      left: 3%;
      border-radius: 10px;
      padding: 5px;
      box-shadow: ${(props) => (
        props.$show_nav === 1 ? "none" : ".5px .5px 1.5px #000"
      )};
      z-index: 2;
    }

    > div {
      height: 100vh;
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #1b1c30;
      max-width: 60%;
      min-width: 16rem;
      text-align: right;
      padding-top: 3rem;
      border-bottom-right-radius: 5px;

      transition: .3s;
      opacity: ${(props) => (
        props.$show_nav === 1 ? 1 : 0
      )};
      pointer-events: ${(props) => (
        props.$show_nav === 1 ? "all" : "none"
      )};
      animation: ${(props) => (
        props.$show_nav === 1 ? "showMenu .5s ease-in-out" : "hiddenMenu .5s ease-in-out"
      )};

      @keyframes showMenu {
        from {
          transform: translateX(-220px);
        } to {
          transform: translateX(0);
        }
      }

      @keyframes hiddenMenu {
        from {
          transform: translateX(0px);
        } to {
          transform: translateX(-220px);
        }
      }

      span {
        margin: .5rem 0;
      }
    }
    
    > img {
      top: .8rem;
    }

    #searchMovieInput {
      top: 1.2rem;
    }

    .optionSelected, .optionSelected:hover {
      border-bottom: none;
      border-right: 5px solid #fff;
    }
  }

  @media (max-width: 520px) {
    > div {
      max-width: 50%;
      min-width: 13rem;
    }

    > div span {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 390px) {
    > div {
      min-width: 12rem;
    }
  }
`