import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

const lighting = keyframes`
  0% {
    color: #484848;
    text-shadow: none;
  }
  60% {
    color: #484848;
    text-shadow: none;
  }
  100% {
    color: white;
    text-shadow: 0 0 7px white, 0 0 50px grey;
  }
`

const StrobeStyled = styled(motion.ul)`
  /* background-color: #272727; */
  display: flex;
  font-size: 80px;

  li {
    color: #484848;

    /* letter-spacing: 10px; */
    animation: ${lighting} 3s linear infinite;
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

export default StrobeStyled
