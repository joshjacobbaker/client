import React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

// Styled Components
import HeaderStyled from "./HeaderStyled"
// Components
import You from "../../../components/you/You"
import LinksEffect from "../../../components/linksEffect/LinksEffect"

const Header = (props) => {
  return (
    <HeaderStyled>
      {/* <div className="header__item">
        <You />
      </div>
      <div className="header__item">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <LinksEffect to="/">Home</LinksEffect>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/postslist">List Posts</NavLink>
          </li>
          <li>
            <NavLink to="/addpostform">Add Post Form</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Single Post</NavLink>
          </li>
          <li>
            <NavLink to="/editpost/:postId">Edit Post</NavLink>
          </li>
          <li>
            <NavLink to="/users">User</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
          <li>
            <NavLink to="/card">Card</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        </ul>
      </div> */}
    </HeaderStyled>
  )
}

export default Header
