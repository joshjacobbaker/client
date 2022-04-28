import styled, { css } from "styled-components"
import NavLink from "../../../globals/ReactRouterDomLink"

const HeaderStyled = styled.header`
  width: 100vw;
  height: 100%;
  display: grid;

  /* background: linear-gradient(to right, green, yellow); */

  @media ${(props) => props.theme.screenSize.mobileL} {
    grid-template-columns: 2fr 8fr 2fr 2fr;
    justify-items: center;
    align-items: center;
    ${(props) => css`
      background: linear-gradient(to right, ${props.theme.colors.teal}, ${props.theme.colors.yellow});
    `}
  }
`

export const Menu = styled.nav`
  display: block;
  width: 10px;
  height: 10px;
  background: black;
`

export const NavLinkStyled = styled(NavLink)`
  /* padding: 4px 8px; */
  display: none;
  text-align: center;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: ${(p) => (p.isActive ? "yellow" : "")};

  @media ${(props) => props.theme.screenSize.mobileL} {
    display: grid;
  }
`

export default HeaderStyled
