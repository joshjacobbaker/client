import styled from "styled-components"
import NavLink from "./NavLink"

const NavLinkStyled = styled(NavLink)`
  /* padding: 4px 8px; */
  text-align: center;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: ${(p) => (p.isActive ? "yellow" : "")};

  /* @media ${(props) => props.theme.screenSize.mobileL} {
    display: grid;
  } */
`

export default NavLinkStyled
