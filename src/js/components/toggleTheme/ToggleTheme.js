import React from "react"
import { ToggleWrapper, Notch } from "./ToggleThemeStyled"

const Toggle = ({ isActive, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  )
}

export default Toggle
