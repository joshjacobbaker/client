// https://codepen.io/ShoniIsra/pen/MWOeZOw

import React, { useRef, useEffect } from "react"

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
      <div className="testimonials">
        <label className="testimonials__item" htmlFor="t-1">
          <div className="testimonials__card">
            <h2 className="testimonials__item__h2">Práctica</h2>
            <div>
              <img className="testimonials__item__img cardimg" src="https://i.pravatar.cc/200" alt="nivel5" />
            </div>
            <div>
              <p className="testimonials__item__p carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
        <label className="testimonials__item" htmlFor="t-2">
          <div className="testimonials__card">
            <h2 className="testimonials__item__h2">Práctica</h2>
            <div>
              <img className="testimonials__item__img cardimg" src="https://i.pravatar.cc/200" alt="nivel5" />
            </div>
            <div>
              <p className="testimonials__item__p carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
        <label className="testimonials__item" htmlFor="t-3">
          <div className="testimonials__card">
            <h2 className="testimonials__item__h2">Práctica</h2>
            <div>
              <img className="testimonials__item__img cardimg" src="https://i.pravatar.cc/200" alt="nivel5" />
            </div>
            <div>
              <p className="testimonials__item__p carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
        <label className="testimonials__item" htmlFor="t-4">
          <div className="testimonials__card">
            <h2 className="testimonials__item__h2">Práctica</h2>
            <div>
              <img className="testimonials__item__img cardimg" src="https://i.pravatar.cc/200" alt="nivel5" />
            </div>
            <div>
              <p className="testimonials__item__p carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
        <label className="testimonials__item" htmlFor="t-5">
          <div className="testimonials__card">
            <h2 className="testimonials__item__h2">Práctica</h2>
            <div>
              <img className="testimonials__item__img cardimg" src="https://i.pravatar.cc/200" alt="nivel5" />
            </div>
            <div>
              <p className="testimonials__item__p carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
      </div>
      <div className="dots">
        <label className="dots__label" htmlFor="t-1"></label>
        <label className="dots__label" htmlFor="t-2"></label>
        <label className="dots__label" htmlFor="t-3"></label>
        <label className="dots__label" htmlFor="t-4"></label>
        <label className="dots__label" htmlFor="t-5"></label>
      </div>
    </div>
  )
}

export default Carousel
