import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const SignupPageStyled = styled(motion.div)`
  @media ${(props) => props.theme.screenSize.desktop} {
  }

  @media ${(props) => props.theme.screenSize.laptop} {
  }

  @media ${(props) => props.theme.screenSize.mobileL} {
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-rows: 600px;
    grid-auto-rows: 600px;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    /* overflow-x: hidden; */
  }
`
export default SignupPageStyled

export const SignupPageDivStyled = styled(motion.div)`
  display: grid;
  justify-items: center;
  /* align-content: center; */
  /* justify-items: center; */
  color: ${(props) => props.theme.color};
  align-items: center;
  &:hover {
    background-color: #105b72c2;
  }
  ${({ theme }) => css`
    background: ${theme.signupPageBackgroundColor};
    color: ${theme.signupPageFontColor};
  `}
  height: 80%;
  width: 80%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
