import React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

// Assets
import dog from "../../images/dog.jpg"

const Header = (props) => {
  const [showMessage, setShowMessage] = useState(false)
  const onClickShowMessageHandler = (e) => setShowMessage(!showMessage)

  console.log(typeof parseInt(props.number), props.number)

  return (
    <div className="header">
      <h1 className="header__item">Header</h1>
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
      </ul>
    </div>
  )
}

export default Header
