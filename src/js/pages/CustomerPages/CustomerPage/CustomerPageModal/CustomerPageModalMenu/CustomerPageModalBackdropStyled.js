import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const ModalStyled = styled(motion.div)`
  display: grid;
  justify-items: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  /* opacity: 0.9; */
  z-index: 1;
  ${({ theme }) => css`
    background: ${theme.modalBackgroundColor};
  `};
`

export default ModalStyled
