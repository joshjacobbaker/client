import React, { useState, useEffect, useRef } from "react"

const Typing = () => {
  const typingElement = useRef(null)

  const onClickHandler = (e) => {
    console.log("click event: " + e)
    typingElement.current.classList.remove("animate")
    setTimeout(() => typingElement.current.classList.add("animate"), 1)
  }

  return (
    <div>
      <div onClick={onClickHandler} ref={typingElement} className="typing animate"></div>
    </div>
  )
}

export default Typing
