import React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = (props) => {
  const [showMessage, setShowMessage] = useState(false)
  const onClickShowMessageHandler = (e) => setShowMessage(!showMessage)

  console.log(typeof parseInt(props.number), props.number)

  return (
    <header className="header">
      <div className="header__container">
        <i className="fa header__you">Y.O.U. Salon</i>
      </div>
      <div className="header__item" onClick={onClickShowMessageHandler}>
        <button>Click Me for fortune cookie</button>
        {showMessage ? <p>Cuz you're looking at the beginning of your Salon's Website!</p> : <p>Momma Bear! You stoked?</p>}
      </div>
      <ul className="header__item">
        <li>
          <NavLink to="/">Home</NavLink>
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
      </ul>
    </header>
  )
}

export default Header
