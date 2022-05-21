import React from "react"
import ImageSliderComponentStyled, { ImageSliderComponentCaptionStyled } from "./ImageSliderComponentStyled"

import ContactUs from "../../../images/pageImages/ContactComponentLandingPage.webp"

const ImageSliderComponent = () => {
  return (
    <ImageSliderComponentStyled>
      <img src={ContactUs} />
      <ImageSliderComponentCaptionStyled>
        <h1>Yooooo</h1>
        <p>Call today to book your appointment!</p>
      </ImageSliderComponentCaptionStyled>
    </ImageSliderComponentStyled>
  )
}

export default ImageSliderComponent
