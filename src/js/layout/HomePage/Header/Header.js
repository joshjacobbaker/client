import React from "react"
import { useState } from "react"

import { useLocation } from "react-router-dom"
// Styled Components
import HeaderStyled, { NavLinkStyled, Menu } from "./HeaderStyled"
// Components
import You from "../../../components/you/You"

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
      <div className="header__item">
        <p>You</p>
      </div>
      <div className="header__item">
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
      </div>
      <div>
        <Menu onClick={onClickDisplayMenuHandler} />
      </div>
      {displayMenu && <div>Yooooooo</div>}
    </HeaderStyled>
  )
}

export default Header
