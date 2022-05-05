import React, { useContext } from "react"
import { ToggleWrapper, Notch } from "./ToggleThemeStyled"
import ToggleThemeContext from "../../context/ToggleThemeContext"

const Toggle = () => {
  const { toggleThemeHandler, toggleTheme } = useContext(ToggleThemeContext)
  return (
    <ToggleWrapper onClick={toggleThemeHandler}>
      <Notch toggleTheme={toggleTheme} />
    </ToggleWrapper>
  )
}

export default Toggle
