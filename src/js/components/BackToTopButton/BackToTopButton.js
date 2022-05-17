import React, { useRef, useEffect, useState } from "react"
import BackToTopButtonStyled from "./BackToTopButtonStyled"

const BackToTopButton = () => {
  // const [backToTopButton, setBackToTopButton] = useState(false)
  // const ref = useRef()

  // useEffect(() => {
  //   document.getElementById("top").addEventListener("scroll", (evt) => {
  //     console.log(evt.target.scrollTop)
  //     if (evt.scrollY > 100) {
  //       setBackToTopButton(true)
  //     } else {
  //       setBackToTopButton(false)
  //     }
  //   })
  // }, [])

  // const scrollUp = () => {
  //   console.log("Print")
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   })
  // }

  return <BackToTopButtonStyled>Scroll To Top</BackToTopButtonStyled>
}

export default BackToTopButton
