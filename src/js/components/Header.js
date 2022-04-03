import React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

// Assets
import dog from "../../images/dog.jpg"

const Header = (props) => {
  const [state, setState] = useState(0)
  console.log(typeof parseInt(props.number), props.number)
  return (
    <div>
      <h1>Header</h1>
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

export default Header
