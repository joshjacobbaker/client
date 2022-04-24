// https://www.udemy.com/course/css-animation-transitions-and-transforms-creativity-course/learn/lecture/24834956#overview

import React from "react"

// Styled Components
import LinksEffectStyled from "./LinksEffectStyled"

//  React Components

// modules.scss
// import styles from "./Test.module.scss"

const LinksEffect = (props) => {
  return <LinksEffectStyled to="/">{props.children}</LinksEffectStyled>
}

export default LinksEffect
