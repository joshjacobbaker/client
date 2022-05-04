import React, { useContext } from "react"
import { ToggleWrapper, Notch } from "./ToggleThemeStyled"
import ToggleThemeContext from "../../context/ToggleThemeContext"

const Toggle = () => {
  const { toggleThemeHandler, toggleActive } = useContext(ToggleThemeContext)
  return (
    <ToggleWrapper onClick={toggleThemeHandler}>
      <Notch isActive={toggleActive} />
    </ToggleWrapper>
  )
}

export default Toggle
