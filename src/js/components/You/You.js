import React from "react"
import YouStyled from "./YouStyled"
import NavLinkStyled from "../navLink/NavLink"

const You = () => {
  return (
    <NavLinkStyled to="/">
      <YouStyled>
        <li>Y</li>
        <li>.</li>
        <li>O</li>
        <li>.</li>
        <li>U</li>
        <li>.</li>
      </YouStyled>
    </NavLinkStyled>
  )
}

export default You
