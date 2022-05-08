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
  background-color: rgba(38, 28, 28, 0.919);
  z-index: 2;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;


  > ul {
    display: grid;
    grid-template-rows: repeat(4, 1fr)
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 0 0;
    list-style: none;

    /* border: 1px solid white; */
    border-radius: 10px;
    overflow-wrap: normal;
    text-transform: capitalize;

    > li {
      display: grid;
      justify-items: center;
      align-items: center;
      text-align: center;
      font-size: 2rem;
      margin: 0 0;
      transform: translate(-10%, 0%);
      height: 100%;
      width: 100%;
      border-bottom: 1px black solid;
      overflow-x: hidden;
      color: white;
      &:hover {
        font-size: 2.5rem;
      }
    }
  }
`

export default ModalStyled
