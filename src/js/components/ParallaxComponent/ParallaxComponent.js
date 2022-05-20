import React from "react"
import ParallaxComponentStyled, { ParallaxComponent3DStyled, ForegroundStyled, BackgroundStyled } from "./ParallaxComponentStyled"

// Images
import Salon1 from "../../../images/salon/salon1.webp"
import Salon2 from "../../../images/salon/salon2.webp"

const ParallaxComponent = () => {
  return (
    <ParallaxComponentStyled>
      <ParallaxComponent3DStyled>
        <ForegroundStyled src={Salon2} />
        <BackgroundStyled src={Salon1} />
        <h1>Welcome!</h1>
      </ParallaxComponent3DStyled>
      <section>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a rerum, nam magni repellat consectetur odio aut similique cum quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam tempore inventore distinctio itaque minima iusto tenetur, reiciendis alias consequatur qui dolorem dolorum eos officiis, nihil rerum cumque harum soluta commodi dolor. Id, iusto corrupti cupiditate temporibus soluta, corporis delectus, facere ipsa fugit rerum quidem distinctio cum officiis repellat quam! Recusandae, inventore nulla eum totam officia ratione sunt cupiditate vero!</section>
    </ParallaxComponentStyled>
  )
}

export default ParallaxComponent

// https://www.youtube.com/watch?v=mxHoPYFsTuk
// https://www.npmjs.com/package/react-scroll-parallax
// https://www.npmjs.com/package/@react-spring/parallax
