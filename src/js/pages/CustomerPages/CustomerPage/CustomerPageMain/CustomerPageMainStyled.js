import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const CustomerPageMainStyled = styled(motion.main)`
  height: 100%;
  width: 100vw;
  /* background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c); */
  grid-area: main;
  overflow: scroll;
  display: grid;
  background: linear-gradient(0.25turn, green, #ebf8e1, #f69d3c);

  @media ${(props) => props.theme.screenSize.mobileL} {
    /* grid-auto-flow: column; */
    grid-template-rows: 1fr;
  }
  justify-items: center;
  align-items: center;
  ${(props) => css`
    background: linear-gradient(to right, ${props.theme.colors.beige}, ${props.theme.colors.yellow});
  `}
`

export default CustomerPageMainStyled
/* @media ${screenSize.desktop} {
  }

  @media ${screenSize.laptop} {
  }

*/
