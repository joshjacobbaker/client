import React from "react"

// Assets
import dog from "../../../images/dog.jpg"

const Slider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide slide-img">
          <img src={dog} alt="" />
        </div>
        <div className="slide slide-img">
          <img src={dog} alt="" />
        </div>
        <div className="slide slide-img">
          <img src={dog} alt="" />
        </div>
        <div className="slide slide-img">
          <img src={dog} alt="" />
        </div>
        <div className="slide slide-img">
          <img src={dog} alt="" />
        </div>
        <div className="slide slide-img">
          <img src={dog} alt="" />
        </div>
        <div className="slide slide-img">
          <img src={dog} alt="" />
        </div>
        <div className="slide slide-img">
          <img src={dog} alt="" />
        </div>
        <div className="slide slide-img">
          <img src={dog} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Slider
