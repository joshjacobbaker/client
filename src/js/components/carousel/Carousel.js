// https://codepen.io/ShoniIsra/pen/MWOeZOw

import React, { useRef, useEffect } from "react"

// React Components
import Cards from "./cards/Cards"
import Dots from "./dots/Dots"

const Carousel = () => {
  const t1Checked = useRef(null)
  const t2Checked = useRef(null)
  const t3Checked = useRef(null)
  const t4Checked = useRef(null)
  const t5Checked = useRef(null)

  useEffect(() => {
    t3Checked.current.setAttribute("checked", true)
  }, [])

  const onCheckedHandler = (e) => {
    let idElementClicked = e.currentTarget.id
    switch (idElementClicked) {
      case "t-1":
        console.log("t-1")
        t1Checked.current.setAttribute("checked", true)
        t2Checked.current.setAttribute("checked", false)
        t3Checked.current.setAttribute("checked", false)
        t4Checked.current.setAttribute("checked", false)
        t5Checked.current.setAttribute("checked", false)
        break
      case "t-2":
        console.log("t-2")
        t1Checked.current.setAttribute("checked", false)
        t2Checked.current.setAttribute("checked", true)
        t3Checked.current.setAttribute("checked", false)
        t4Checked.current.setAttribute("checked", false)
        t5Checked.current.setAttribute("checked", false)
        break
      case "t-3":
        console.log("t-3")
        t1Checked.current.setAttribute("checked", false)
        t2Checked.current.setAttribute("checked", false)
        t3Checked.current.setAttribute("checked", true)
        t4Checked.current.setAttribute("checked", false)
        t5Checked.current.setAttribute("checked", false)
        break
      case "t-4":
        console.log("t-4")
        t1Checked.current.setAttribute("checked", false)
        t2Checked.current.setAttribute("checked", false)
        t3Checked.current.setAttribute("checked", false)
        t4Checked.current.setAttribute("checked", true)
        t5Checked.current.setAttribute("checked", false)
        break
      case "t-5":
        console.log("t-5")
        t1Checked.current.setAttribute("checked", false)
        t2Checked.current.setAttribute("checked", false)
        t3Checked.current.setAttribute("checked", false)
        t4Checked.current.setAttribute("checked", false)
        t5Checked.current.setAttribute("checked", true)
        break
    }
  }
  return (
    <div className="slider">
      <input className="slider__input" onChange={onCheckedHandler} type="radio" name="testimonial" id="t-1" ref={t1Checked} />
      <input className="slider__input" onChange={onCheckedHandler} type="radio" name="testimonial" id="t-2" ref={t2Checked} />
      <input className="slider__input" onChange={onCheckedHandler} type="radio" name="testimonial" id="t-3" ref={t3Checked} />
      <input className="slider__input" onChange={onCheckedHandler} type="radio" name="testimonial" id="t-4" ref={t4Checked} />
      <input className="slider__input" onChange={onCheckedHandler} type="radio" name="testimonial" id="t-5" ref={t5Checked} />
      <Cards />
      <Dots />
    </div>
  )
}

export default Carousel
