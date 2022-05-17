import React, { useRef, useEffect, useState, useCallback } from "react"
import CustomerPageMainStyled from "./CustomerPageMainStyled"
import BackToTopButtonStyled from "../BackToTopButton/BackToTopButtonStyled"

const CustomerPageMain = (props) => {
  const [backToTopButton, setBackToTopButton] = useState(false)
  const scrollingRef = useRef()

  useEffect(() => {
    const main = scrollingRef.current
    main.addEventListener("scroll", (evt) => {
      console.log(evt.target.scrollTop > 100)
      if (evt.target.scrollTop > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = useCallback((ref) => {
    console.log("Print")
    scrollingRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <CustomerPageMainStyled ref={scrollingRef}>
      {props.children}
      {backToTopButton && <BackToTopButtonStyled onClick={() => scrollUp(scrollingRef)}>Scroll To Top</BackToTopButtonStyled>}
    </CustomerPageMainStyled>
  )
}

export default CustomerPageMain
