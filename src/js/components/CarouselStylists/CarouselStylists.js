import react from "react"
import CarouselStylistsStyled from "./CarouselStylistsStyled"
// Images
import Images from "./ImagesStylists"

const CarouselStylists = () => {
  return (
    <CarouselStylistsStyled>
      {Images.map((image) => (
        <img src={image}></img>
      ))}
    </CarouselStylistsStyled>
  )
}

export default CarouselStylists
