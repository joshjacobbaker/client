import styled, { css } from "styled-components"
import NavLink from "../../../components/ReactRouterDomLink/ReactRouterDomLink"
import You from "../../../components/you/You"

const HeaderStyled = styled.header`
  display: grid;
  width: 100vw;
  height: 100%;

  /* background: linear-gradient(to right, green, yellow); */
  @media ${(props) => props.theme.screenSize.mobileL} {
    grid-template-columns: 1fr 1fr;
    justify-items: space-between;
    align-items: center;
    ${(props) => css`
      background: linear-gradient(to right, ${props.theme.colors.teal}, ${props.theme.colors.yellow});
    `}
  }
`

export const YouStyled = styled(You)``

export const MenuContainer = styled.div`
  /* position: fixed; */
  /* right: 0;
  margin-right: 30px; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-self: right;
  justify-items: center;
  align-items: center;
  height: 100%;
  max-height: 100%;
  width: 100%;
  background: white;
  right: 0;
`

export const MenuIcon = styled.i`
  height: 5rem;
  width: 5rem;
  background: blue;
`

export const MenuDisplay = styled.div`
  /* display:  */
  position: fixed;
  top: 10vh;
  right: 0;
  height: 200px;
  width: 50vw;
  background: brown;
`

export const NavLinkStyled = styled(NavLink)`
  /* padding: 4px 8px; */
  text-align: center;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: ${(p) => (p.isActive ? "yellow" : "")};

  /* @media ${(props) => props.theme.screenSize.mobileL} {
    display: grid;
  } */
`

export default HeaderStyled
