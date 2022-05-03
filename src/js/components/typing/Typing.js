import React, { useState, useEffect, useRef } from "react"
// import TypingStyled from "./TypingStyled"
import { motion } from "framer-motion"

const Typing = () => {
  const typingElement = useRef(null)

  const onClickHandler = (e) => {
    console.log("click event: " + e)
    typingElement.current.classList.remove("animate")
    setTimeout(() => typingElement.current.classList.add("animate"), 1)
  }

  return (
    // <TypingStyled />
    <motion.div drag className="typing-body">
      <div onClick={onClickHandler} ref={typingElement} className="typing animate"></div>
    </motion.div>
  )
}

export default Typing
