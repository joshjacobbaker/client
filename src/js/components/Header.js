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
    <div>
      <h1>Header</h1>
      <div onClick={onClickShowMessageHandler}>
        <button>Click Me to reveal your good fortune cookie</button>
        {showMessage ? <p>Suck a Dag! Bahahaha Fucker!</p> : <p>Trev, I really want you to...</p>}
      </div>
      <ul>
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
      </ul>
    </div>
  )
}

export default Header
