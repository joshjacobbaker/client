import styled, { css, keyframes } from "styled-components"
import { motion } from "framer-motion"

const TypingBodyStyled = styled(motion.div)`
  display: grid;
  justify-content: center;
  align-items: center;
`

const TypingTextStyled = styled(motion.div)`
.typing.animate {
  width: 21ch;
  border-right: 0.1em solid black;
  font-family: monospace;
  font-size: 2rem;
  animation: ${type} 2.5s steps(21) forwards, ${writer} 1s infinite alternate, ${delete} 0.5s steps(5) 2.5s, ${type2} 1s steps(6) 3s forwards, ${type3} 3s steps(18, end) 6s forwards;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}

.typing.animate::before {
  content: "Hello, welcome to YOU.";
  animation: ${type2} 1s steps(6) 3s forwards, ${type3} 3s steps(18, end) 6s forwards;
}

`

export default TypingTextStyled

const type = keyframes`
    from {
    width: 0;
  }
  to {
    width: 21ch;
  }
`
const type2 = keyframes`
  from {
    width: 16ch;
    content: "Hello, Welcome to YOU.";
  }
  to {
    width: 22ch;
    content: "Hello, Welcome to YOU.";
  }
`
const type3 = keyframes`
  from {
    width: 22ch;
    content: "Hello, Welcome to YOU. Where YOU matter.";
  }
  to {
    width: 40ch;
    content: "Hello, Welcome to YOU. Where YOU matter.";
  }
`

const writer = keyframes`
  50% {
    border-color: transparent;
  }
`

const delete = keyframes`
  from {
    width: 21ch;
  }
  to {
    width: 16ch;
  }
`
