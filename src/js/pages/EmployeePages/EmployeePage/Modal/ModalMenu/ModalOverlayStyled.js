import styled from "styled-components"
import { motion } from "framer-motion"

const ModalStyled = styled(motion.div)`
  display: grid;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  /* right: 0;
  bottom: 0; */
  transform: translateX(-50%) translateY(-50%);
  height: 65vh;
  width: 70vw;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 2;
  /* color: white; */

  > ul {
    display: grid;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    height: 65vh;
    width: 70vw;

    > li {
      display: grid;
      justify-content: center;
      border: 10px solid black;
      background-color: white;
      justify-items: center;
      font-size: 2rem;
    }
  }
`

export default ModalStyled
