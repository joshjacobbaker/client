import React from "react"
import CarouselSalonStyled from "./CarouselSalonStyled"
import LazyLoadedImage from "../LazyLoadedImage/LazyLoadedImageStyled"
// Images
import Images from "./ImagesSalon"

const CarouselSalon = () => {
  return (
    <CarouselSalonStyled>
      {Images.map((image) => (
        <LazyLoadedImage threshold="100" effect="blur" src={image} height="400px" width="100%"></LazyLoadedImage>
      ))}
    </CarouselSalonStyled>
  )
}

export default CarouselSalon
