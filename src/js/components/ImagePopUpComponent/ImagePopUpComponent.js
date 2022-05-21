import React from "react"
import ImagePopUpComponentStyled, { ImagePopUpCaptionComponentStyled } from "./ImagePopUpComponentStyled"

import SignupImage from "../../../images/pageImages/SignUpComponentLandingPage.webp"
const ImagePopUpComponent = () => {
  return (
    <ImagePopUpComponentStyled>
      <img src={SignupImage} alt="" />
      <ImagePopUpCaptionComponentStyled>
        <h1>Yoooooo</h1>
        <p>Caption Pop Up</p>
      </ImagePopUpCaptionComponentStyled>
    </ImagePopUpComponentStyled>
  )
}

export default ImagePopUpComponent
