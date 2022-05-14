import styled, { keyframes, css } from "styled-components"
import { FaBuilding, FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { motion } from "framer-motion"
const animate = keyframes`
  from {
    scale: 1;
    filter: hue-rotate(0deg);
  }
  to {
    scale: 1.2;
    filter: hue-rotate(360deg);
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
  ${({ theme }) => css`
    background: ${theme.socialMediaBackgroundColor};
    color: ${theme.socialMediaFontColor};
    fill: ${theme.accentBackgroundColor};
  `}
`

export default SocialMediaIconsContainerFooterStyled

/* const IconsWrapperStyled = styled.div`
  cursor: pointer;
  ${({ theme }) => css`
    background: ${theme.socialMediaBackgroundColor};
    color: ${theme.socialMediaFontColor};
    fill: ${theme.accentBackgroundColor};
  `}
  size: 4rem;
  transition: all 1s;
  &:hover {
    cursor: pointer;
    animation: ${animate} 3s linear 0.1s infinite both alternate;
  }
  &:active {
    animation: none;
    scale: 1.2;
  }
`

const IconsWrapperFunction = ({ IconsComponent, children, ...props }) => {
  return <IconsComponent {...props}>{children}</IconsComponent>
} */

/* export const FaEnvelopeStyled = IconsWrapperFunction(FaPhoneSquareAlt) */

export const FaEnvelopeStyled = styled(FaEnvelope)`
  cursor: pointer;
  ${({ theme }) => css`
    background: ${theme.socialMediaBackgroundColor};
    color: ${theme.socialMediaFontColor};
    fill: ${theme.accentBackgroundColor};
  `}
  size: 4rem;
  transition: all 1s;
  &:hover {
    cursor: pointer;
    animation: ${animate} 3s linear 0.1s infinite both alternate;
  }
  &:active {
    animation: none;
    scale: 1.2;
  }
`

export const FaPhoneSquareAltStyled = styled(FaPhoneSquareAlt)`
  cursor: pointer;
  ${({ theme }) => css`
    background: ${theme.socialMediaBackgroundColor};
    color: ${theme.socialMediaFontColor};
    fill: ${theme.accentBackgroundColor};
  `}
  size: 4rem;
  transition: all 1s;
  &:hover {
    cursor: pointer;
    animation: ${animate} 3s linear 0.1s infinite both alternate;
  }
  &:active {
    scale: 2;
  }
`

export const FaFacebookStyled = styled(FaFacebook)`
  cursor: pointer;
  ${({ theme }) => css`
    background: ${theme.socialMediaBackgroundColor};
    color: ${theme.socialMediaFontColor};
    fill: ${theme.accentBackgroundColor};
  `}
  size: 4rem;
  transition: all 1s;
  &:hover {
    cursor: pointer;
    animation: ${animate} 3s linear 0.1s infinite both alternate;
  }
  &:active {
    scale: 2;
  }
`

export const FaInstagramSquareStyled = styled(FaInstagramSquare)`
  cursor: pointer;
  ${({ theme }) => css`
    background: ${theme.socialMediaBackgroundColor};
    color: ${theme.socialMediaFontColor};
    fill: ${theme.accentBackgroundColor};
  `}
  size: 4rem;
  transition: all 1s;
  &:hover {
    cursor: pointer;
    animation: ${animate} 3s linear 0.1s infinite both alternate;
  }
  &:active {
    scale: 2;
  }
`

export const FaBuildingStyled = styled(FaBuilding)`
  cursor: pointer;
  ${({ theme }) => css`
    background: ${theme.socialMediaBackgroundColor};
    color: ${theme.socialMediaFontColor};
    fill: ${theme.accentBackgroundColor};
  `}
  size: 4rem;
  transition: all 1s;
  &:hover {
    cursor: pointer;
    animation: ${animate} 1s linear 0.1s infinite both alternate;
  }
  &:active {
    scale: 2;
  }
`
// FaEnvelope
// FaPhoneSquareAlt
// FaFacebook
// FaInstagramSquare
// FaBuilding
