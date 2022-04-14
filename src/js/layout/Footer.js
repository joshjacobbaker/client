import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <h2>Footer</h2>
      <ul>
        <li>Copy Right 2022</li>
        <div class="container">
          <i class="fa fa-apple" id="apple"></i>
          <i class="fa fa-twitter" id="twitter"></i>
          <i class="fa fa-github-square github" id="github"></i>
          <i class="fa fa-facebook-square" id="facebook"></i>
        </div>
      </ul>
    </div>
  )
}

export default Footer
