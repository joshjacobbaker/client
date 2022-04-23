import React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

// Components
import You from "../../../components/you/You"
import LinksEffect from "../../../components/linksEffect/LinksEffect"

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__item">
        <You />
      </div>
      <div className="header__item">
        <ul>
          <li>
            {/* <NavLink to="/">Home</NavLink> */}
            <LinksEffect />
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
        </ul>
      </div>
    </header>
  )
}

export default Header
