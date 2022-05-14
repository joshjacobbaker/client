import styled, { keyframes, css } from "styled-components"
import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { motion } from "framer-motion"

const animateHover = keyframes`
  from {
    scale: 1;
  }
  to {
    scale: 1.05;
  }
`

const animateClick = keyframes`
  0% {
    scale: 1;
  }

  50% {
    scale: 0.9
  }

  100% {
    scale: 1;
  }
`

const SocialMediaIconsContainerFooterStyled = styled(motion.div)`
  height: 10vh;
  width: 100%;
  margin: 0 0;
  padding: 0 0;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-flow: column;
`
export default SocialMediaIconsContainerFooterStyled

const FontAwesomeSharedStyle = css`
  cursor: pointer;
  ${({ theme }) => css`
    fill: ${theme.accentBackgroundColor};
  `}
  font-size: 4rem;
  transition: all 1s;
  &:hover {
    cursor: pointer;
    animation: ${animateHover} 1s linear 0.1s infinite both alternate;
  }
  &:active {
    animation: ${animateClick} 1s linear;
    scale: 1.2;
  }
`

export const FaEnvelopeStyled = styled(FaEnvelope)`
  ${FontAwesomeSharedStyle};
`

export const FaPhoneSquareAltStyled = styled(FaPhoneSquareAlt)`
  ${FontAwesomeSharedStyle}
`

export const FaFacebookStyled = styled(FaFacebook)`
  ${FontAwesomeSharedStyle}
`

export const FaInstagramSquareStyled = styled(FaInstagramSquare)`
  ${FontAwesomeSharedStyle}
`

export const FaBuildingStyled = styled(FaBuilding)`
  ${FontAwesomeSharedStyle}
`
