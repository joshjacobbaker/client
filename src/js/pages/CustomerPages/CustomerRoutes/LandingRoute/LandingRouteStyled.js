import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const LandingRouteStyled = styled(motion.div)`
  @media ${(props) => props.theme.screenSize.desktop} {
  }

  @media ${(props) => props.theme.screenSize.laptop} {
  }

  @media ${(props) => props.theme.screenSize.mobileL} {
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-rows: 300px;
    grid-auto-rows: 300px;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    /* overflow-x: hidden; */
  }
`
export default LandingRouteStyled

export const LandingRouteDivStyled = styled(motion.div)`
  display: grid;
  justify-content: center;
  /* align-content: center; */
  /* justify-items: center; */
  grid-auto-rows: 100px;
  align-items: center;
  ${({ theme }) => css`
    background: ${theme.backgroundColor};
  `}
  height: 80%;
  width: 80%;
  overflow: hidden;
  border-radius: 10px;
`
