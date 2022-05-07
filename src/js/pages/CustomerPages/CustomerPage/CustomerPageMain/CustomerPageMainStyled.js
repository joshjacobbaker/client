import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const CustomerPageMainStyled = styled(motion.main)`
  height: 100%;
  width: 100vw;
  grid-area: main;
  overflow: scroll;
  display: grid;
  justify-items: center;
  align-items: center;
  ${(props) => css`
    background: linear-gradient(to right, ${props.theme.bg}, ${props.theme.fg});
  `}

  @media ${(props) => props.theme.screenSize.mobileL} {
    /* grid-auto-flow: column; */
    grid-template-rows: 1fr;
  }
`

export default CustomerPageMainStyled
/* @media ${screenSize.desktop} {
  }

  @media ${screenSize.laptop} {
  }

*/
