import styled, { css } from "styled-components"

const HeaderStyled = styled.header`
  display: grid;
  width: 100vw;
  height: 100%;

  @media ${(props) => props.theme.screenSize.mobileL} {
    grid-template-columns: 1fr 1fr;
    justify-items: space-between;
    align-items: center;
    ${({ theme }) => css`
      background: ${theme.backgroundColor};
    `}
  }
`

// export const MenuDisplay = styled.div`
//   position: fixed;
//   top: 10vh;
//   right: 0;
//   height: 10vh;
//   width: 25vw;
//   ${(props) => css`
//     background: linear-gradient(to right, ${props.theme.colors.yellow}, ${props.theme.colors.yellow});
//   `}
// `

export default HeaderStyled
