import styled, { keyframes, css } from "styled-components"
import { motion } from "framer-motion"

const lighting = keyframes`
  0% {
    color: ${(props) => props.theme.fg};
    text-shadow: none;
  }
  90% {
    color: ${(props) => props.theme.fg};
    text-shadow: 5px 5px 7px white, 5px 5px 15px white;
  }
  100% {
    color: white;
    text-shadow: 10px 10px 17px ${(props) => props.theme.fg}, 10px 10px 30px ${(props) => props.theme.fg};
  }
`

const YouStyled = styled(motion.ul)`
  /* background-color: #272727; */
  display: flex;
  font-size: 6vh;
  letter-spacing: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.fg};
  margin-left: 20px;

  li {
    /* letter-spacing: 10px; */
    animation: ${lighting} 4s linear infinite;
    border-bottom: white;
  }

  li:nth-child(1) {
    animation-delay: 0s;
  }

  li:nth-child(2) {
    animation-delay: 0.1s;
  }
  li:nth-child(3) {
    animation-delay: 0.2s;
  }
  li:nth-child(4) {
    animation-delay: 0.3s;
  }

  li:nth-child(5) {
    animation-delay: 0.4s;
  }
  li:nth-child(6) {
    animation-delay: 0.5s;
  }
`

export default YouStyled
