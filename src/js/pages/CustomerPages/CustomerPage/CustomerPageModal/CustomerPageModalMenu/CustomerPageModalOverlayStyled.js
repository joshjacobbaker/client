import styled from "styled-components"
import { motion } from "framer-motion"

const ModalStyled = styled(motion.div)`
  display: grid;
  justify-items: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translateX(-50%) translateY(-50%);
  height: 65vh;
  width: 70vw;
  background-color: rgba(38, 28, 28, 0.397);
  z-index: 2;
  /* color: white; */

  > ul {
    display: grid;
    grid-template-rows: repeat(3, 1fr)
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: 10px solid black;
    border-radius: 10px;
    overflow-wrap: normal;
    text-transform: capitalize;
    text-align: center;

    > li {
      font-size: 2rem;
      
    }
  }
`

export default ModalStyled
