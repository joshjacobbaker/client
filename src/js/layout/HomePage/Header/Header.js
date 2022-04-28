import React from "react"
import { useState } from "react"

import { useLocation } from "react-router-dom"
// Styled Components
import HeaderStyled, { NavLinkStyled, MenuContainer, MenuIcon, MenuDisplay } from "./HeaderStyled"
// Components

const Header = (props) => {
  const { pathname } = useLocation()
  const [displayMenu, setDisplayMenu] = useState(false)
  const onClickDisplayMenuHandler = (e) => {
    e.preventDefault()
    console.log(`Clicked Display Menu ${displayMenu}`)
    setDisplayMenu((d) => !d)
  }

  return (
    <HeaderStyled>
      <div>
        <p>You</p>
      </div>
      <MenuContainer>
        <div>Theme Toggle</div>
        {!displayMenu && <MenuIcon onClick={onClickDisplayMenuHandler}>Icon</MenuIcon>}
        {displayMenu && (
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
      </MenuContainer>
    </HeaderStyled>
  )
}

export default Header
