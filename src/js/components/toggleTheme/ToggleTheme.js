import React from "react"
import { ToggleWrapper, Notch } from "./ToggleThemeStyled"

const Toggle = ({ isActive }) => {
  return (
    <ToggleWrapper>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  )
}

export default Toggle
