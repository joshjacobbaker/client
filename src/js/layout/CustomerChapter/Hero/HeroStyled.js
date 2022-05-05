import styled, { css } from "styled-components"

const HeroStyled = styled.div`
  width: 100vw;
  /* border: 1px solid $color-white; */
  background-color: #1696b2;
  grid-area: hero;
  background: $color-black;
  ${(props) => css`
    background: linear-gradient(to right, ${props.theme.colors.teal}, ${props.theme.colors.yellow});
  `}
`

export default HeroStyled
