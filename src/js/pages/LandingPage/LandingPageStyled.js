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
    grid-gap: 30px;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }
`
export default LandingPageStyled

const cardStyling = css`
  display: grid;
  justify-content: center;
  /* align-content: center; */
  /* justify-items: center; */
  font-size: 1.5rem;
  align-items: start;
  inline-size: 100%;
  overflow-wrap: break-word;
  text-align: center;
  overflow: hidden;
  &:hover {
    background-color: #105b72c2;
  }
  height: 70vh;
  width: 80%;
  overflow-x: hidden;
  overflow-y: scroll;
  ${(p) => css`
    background: ${p.alternate ? p.theme.landingPageFontColor : p.theme.landingPageBackgroundColor};
    color: ${p.alternate ? p.theme.landingPageBackgroundColor : p.theme.landingPageFontColor};
    font-size: ${p.isVisible ? "35px" : ""};
  `}

  &:first-child {
    margin-top: 30px;
  }

  &:last-child {
    margin-bottom: 100px;
  }
`

export const LandingPageCardLargeStyled = styled(motion.div)`
  ${cardStyling}
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const LandingPageCardMediumStyled = styled(motion.div)`
  ${cardStyling}
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const LandingPageCardSmallStyled = styled(motion.div)`
  ${cardStyling}
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
