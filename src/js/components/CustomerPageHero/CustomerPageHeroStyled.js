import styled, { css } from "styled-components"

const CustomerPageHeroStyled = styled.div`
  width: 100vw;
  /* border: 1px solid $color-white; */
  background-color: #1696b2;
  grid-area: hero;
  background: $color-black;
  ${({ theme }) =>
    css`
      background: ${theme.heroBackgroundColor};
      color: ${theme.heroFontColor};
    `}
`

export default CustomerPageHeroStyled
