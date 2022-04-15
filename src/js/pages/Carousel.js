// https://codepen.io/ShoniIsra/pen/MWOeZOw

import React from "react"

const Carousel = () => {
  return (
    <div className="slider">
      <input type="radio" name="testimonial" id="t-1" />
      <input type="radio" name="testimonial" id="t-2" />
      <input type="radio" name="testimonial" id="t-3" checked />
      <input type="radio" name="testimonial" id="t-4" />
      <input type="radio" name="testimonial" id="t-5" />
      <div className="testimonials mb-8">
        <label className="item" for="t-1">
          <div className="mycard">
            <p className="cardtitle">Práctica</p>
            <div>
              <img src="https://i.pravatar.cc/200" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
        <label className="item" for="t-2">
          <div className="mycard">
            <p className="cardtitle">Práctica</p>
            <div>
              <img src="https://i.pravatar.cc/200" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
        <label className="item" for="t-3">
          <div className="mycard">
            <p className="cardtitle">Práctica</p>
            <div>
              <img src="https://i.pravatar.cc/200" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
        <label className="item" for="t-4">
          <div className="mycard">
            <p className="cardtitle">Práctica</p>
            <div>
              <img src="https://i.pravatar.cc/200" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
        <label className="item" for="t-5">
          <div className="mycard">
            <p className="cardtitle">Práctica</p>
            <div>
              <img src="https://i.pravatar.cc/200" alt="nivel5" className="cardimg" />
            </div>
            <div>
              <p className="carddescription">Poner en práctica los conocimientos adquiridos.</p>
            </div>
          </div>
        </label>
      </div>
      <div className="dots">
        <label for="t-1"></label>
        <label for="t-2"></label>
        <label for="t-3"></label>
        <label for="t-4"></label>
        <label for="t-5"></label>
      </div>
    </div>
  )
}

export default Carousel
