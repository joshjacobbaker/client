import styled from "styled-components"
import screenSize from "../../../globals/screenSize"

const HeaderStyled = styled.header`
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr;
  justify-items: center;
  align-items: center;

  /* border: 1px solid white; */
  background-color: black;
  grid-area: header;

  &__item {
    // background-color: red;
    width: 100%;
  }

  ul {
    // background-color: blue;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr;
    // margin-left: 30px;
    justify-content: space-around;
    justify-items: center;
  }

  li {
    font-size: 1.8rem;
    &:hover {
      transform: scale(1.2);
      font-style: bold;
      color: #fff;
    }
    list-style: none;

    & > * {
      text-decoration: none;
      color: inherit;
    }
  }
}
@media ${screenSize.desktop} {}
@media ${screenSize.laptop} {

} 

@media ${screenSize.mobileL}  {
  .header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
    align-items: center;

    /* border: 1px solid $color-white; */
    background-color: $color-black;
    grid-area: header;

    &__item {
      // background-color: red;
      width: 80%;
    }

    ul {
      // background-color: blue;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    li {
      font-size: 1.2rem;
      &:hover {
        transform: scale(1.2);
      }
      list-style: none;

      & > * {
        text-decoration: none;
        color: inherit;
      }
    }
  }

`

export default HeaderStyled