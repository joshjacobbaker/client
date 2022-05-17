import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const LandingPageStyled = styled(motion.div)`
  @media ${(props) => props.theme.screenSize.desktop} {
  }

  @media ${(props) => props.theme.screenSize.laptop} {
  }

  @media ${(props) => props.theme.screenSize.mobileL} {
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-rows: 600px;
    grid-auto-rows: 400px;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }
`
export default LandingPageStyled

export const LandingPageDivStyled = styled(motion.div)`
  display: grid;
  justify-content: center;
  /* align-content: center; */
  /* justify-items: center; */
  font-size: 1.5rem;
  grid-auto-rows: 50px;
  align-items: center;
  &:hover {
    background-color: #105b72c2;
  }
  ${({ theme }) => css`
    background: ${theme.landingPageBackgroundColor};
    color: ${theme.landingPageFontColor};
  `}
  height: 100%;
  width: 90%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
