import React from "react"
import { NavLink } from "react-router-dom"

import Typing from "../pages/Typing"

const Footer = () => {
  return (
    <div className="footer">
      <h2>Footer</h2>
      <ul>
        <li>Copy Right 2022</li>
        <li>
          <div className="container">
            <i className="fa fa-apple" id="apple"></i>
            <i className="fa fa-twitter" id="twitter"></i>
            <i className="fa fa-github-square github" id="github"></i>
            <i className="fa fa-facebook-square" id="facebook"></i>
          </div>
        </li>
        <li>
          <Typing></Typing>
        </li>
      </ul>
    </div>
  )
}

export default Footer
