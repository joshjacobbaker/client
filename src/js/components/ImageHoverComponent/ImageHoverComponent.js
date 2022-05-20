import React from "react"

// Layout
import ImageHoverComponentStyled, { ImageHoverComponentCaptionStyled } from "./ImageHoverComponentStyled"

// Image
import Stylists1 from "../../../images/stylists/stylists1.webp"
const ImageHoverComponent = () => {
  return (
    <ImageHoverComponentStyled>
      <img src={Stylists1} alt="" />
      <ImageHoverComponentCaptionStyled>
        <h1>Yooooo</h1>
        <p>What a deal</p>
      </ImageHoverComponentCaptionStyled>
    </ImageHoverComponentStyled>
  )
}

export default ImageHoverComponent
