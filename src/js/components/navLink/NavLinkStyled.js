import styled from "styled-components"
import NavLink from "./NavLink"

const NavLinkStyled = styled(NavLink)`
  display: grid;
  justify-items: center;
  align-items: center;
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: ${(p) => (p.isActive ? "yellow" : "")};

  /* @media ${(props) => props.theme.screenSize.mobileL} {
    display: grid;
  } */
`

export default NavLinkStyled
