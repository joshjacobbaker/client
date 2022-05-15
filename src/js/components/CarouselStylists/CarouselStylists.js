import React from "react"
import LazyLoadedImageStyled from "../LazyLoadedImage/LazyLoadedImageStyled"
import CarouselStylistsStyled from "./CarouselStylistsStyled"
// Images
import Images from "./ImagesStylists"

const CarouselStylists = () => {
  return (
    <CarouselStylistsStyled>
      {Images.map((image) => (
        <LazyLoadedImageStyled threshold="100" effect="blur" src={image} height="400px" width="100%" />
      ))}
    </CarouselStylistsStyled>
  )
}

export default CarouselStylists

// https://www.npmjs.com/package/react-lazy-load-image-component
