import React from "react"
import styled from "styled-components"
import { ToggleWrapper, Notch } from "./ToggleThemeStyled"

const Toggle = ({ isActive }) => {
  return (
    <ToggleWrapper>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  )
}

export default Toggle
