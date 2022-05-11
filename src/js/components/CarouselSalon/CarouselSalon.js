import react from "react"
import CarouselSalonStyled from "./CarouselSalonStyled"
// Images
import Images from "./ImagesSalon"

const CarouselSalon = () => {
  return (
    <CarouselSalonStyled>
      {Images.map((image) => (
        <img src={image}></img>
      ))}
    </CarouselSalonStyled>
  )
}

export default CarouselSalon
