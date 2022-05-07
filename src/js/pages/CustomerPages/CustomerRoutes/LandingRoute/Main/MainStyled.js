import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const MainStyled = styled(motion.main)`
  width: 100vw;
  /* background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c); */
  grid-area: main;
  overflow: scroll;
  display: grid;
  background: linear-gradient(0.25turn, green, #ebf8e1, #f69d3c);

  @media ${(props) => props.theme.screenSize.mobileL} {
    /* grid-auto-flow: column; */
    grid-template-rows: 80vh;
    grid-auto-rows: 80vh;
  }
  justify-items: center;
  align-items: center;
  ${(props) => css`
    background: linear-gradient(to right, ${props.theme.colors.beige}, ${props.theme.colors.yellow});
  `}
`

export default MainStyled
/* @media ${screenSize.desktop} {
  }

  @media ${screenSize.laptop} {
  }

*/