import React from "react"
import { useState } from "react"

import { useLocation } from "react-router-dom"
// Styled Components
import HeaderStyled, { NavLinkStyled, MenuContainer, MobileMenuIcon, MenuDisplay } from "./HeaderStyled"
// Components

const Header = (props) => {
  const { pathname } = useLocation()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <HeaderStyled>
      <div>
        <p>You</p>
      </div>
      <MenuContainer onClick={() => setShowMenu((d) => !d)}>
        <div>Theme Toggle</div>
        <MobileMenuIcon id="mobileMenuIcon">
          <div></div>
          <div></div>
          <div></div>
        </MobileMenuIcon>
      </MenuContainer>
      {showMenu && (
        <MenuDisplay>
          <ul>
            <li>
              <NavLinkStyled to="/" isActive={pathname === "/"}>
                Home
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/signup" isActive={pathname === "/signup"}>
                Signup
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/counter" isActive={pathname === "/counter"}>
                Counter
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/addpostform" isActive={pathname === "/addpostform"}>
                Add Post
              </NavLinkStyled>
            </li>
          </ul>
        </MenuDisplay>
      )}
    </HeaderStyled>
  )
}

export default Header
