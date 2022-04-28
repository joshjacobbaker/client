import React from "react"
import { useState } from "react"
import NavLink from "../../../globals/ReactRouterDomLink"

// Styled Components
import HeaderStyled from "./HeaderStyled"
// Components
import You from "../../../components/you/You"
import LinksEffect from "../../../components/linksEffect/LinksEffect"

const Header = (props) => {
  return (
    <HeaderStyled>
      <div className="header__item">
        <p>You</p>
      </div>
      <div className="header__item">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/addpostform">Add Post</NavLink>
          </li>
        </ul>
      </div>
    </HeaderStyled>
  )
}

export default Header
