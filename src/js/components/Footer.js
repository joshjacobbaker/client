import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/counter">Counter</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Footer
