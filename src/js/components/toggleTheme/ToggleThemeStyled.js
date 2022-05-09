import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  ${({ theme }) => css`
    background: ${theme.fg};
  `}
`

export const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${(p) => (p.toggleTheme === "light" ? "26px" : "1px")});
`
