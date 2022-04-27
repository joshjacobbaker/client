import styled, { css } from "styled-components"

const HeaderStyled = styled.header`
  width: 100vw;
  height: 100%;
  display: grid;

  /* background: linear-gradient(to right, green, yellow); */

  @media ${(props) => props.theme.screenSize.mobileL} {
    grid-template-columns: 2fr 8fr;
    justify-items: center;
    align-items: center;
    ${(props) => css`
      background: linear-gradient(to right, ${props.theme.colors.teal}, ${props.theme.colors.yellow});
    `}
  }
`

export default HeaderStyled
