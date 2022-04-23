import styled from "styled-components"

const MainStyled = styled.main`
  border: 1px solid $color-white;
  background-color: $color-black;
  grid-area: main;
  overflow: scroll;
  display: grid;
  justify-items: center;
  align-items: center;

  @media (max-width: $screen-medium) {
  }

  @media (max-width: $screen-small) {
  }
`

export default MainStyled
