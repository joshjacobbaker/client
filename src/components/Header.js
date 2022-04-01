import React from "react"
import { useState } from "react"

// Assets
import dog from "../images/dog.jpg"

const Header = (props) => {
  const [state, setState] = useState(0)
  console.log(typeof parseInt(props.number))
  return (
    <div className="header">
      <div className="header__logo-box">
        <img src={dog} className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <a href="#" className="btn btn--white btn--animated">
          Discover Our Tours
        </a>
      </div>
    </div>
  )
}

export default Header
