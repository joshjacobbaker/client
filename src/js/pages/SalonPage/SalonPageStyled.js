import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const SalonPageStyled = styled(motion.div)`
  @media ${(props) => props.theme.screenSize.desktop} {
  }

  @media ${(props) => props.theme.screenSize.laptop} {
  }

  @media ${(props) => props.theme.screenSize.mobileL} {
    height: 100%;
    width: 100vw;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-items: center;
    /* overflow-x: hidden; */
  }
`
export default SalonPageStyled

// export const SalonPageDivStyled = styled(motion.div)`
//   display: grid;
//   grid-template-rows: 60px 1fr;
//   justify-items: center;
//   align-items: center;
//   &:hover {
//     background-color: #105b72c2;
//   }
//   ${({ theme }) => css`
//     background: ${theme.backgroundColor};
//   `}
//   height: 70%;
//   width: 80%;
//   h1 {
//     font-size: 1.8rem;
//     text-align: center;
//     color: ${(props) => props.theme.color};
//   }
//   ul {
//     display: grid;
//     align-items: center;
//     /* justify-items: center; */
//     height: 100%;
//     width: 100%;
//     text-align: center;
//     margin-bottom: 20px;
//   }

//   li {
//     display: grid;
//     grid-template-columns: 70px 1fr;
//     justify-items: left;
//     align-items: center;
//     margin-left: 20px;
//     margin-right: 20px;
//     overflow: none;
//     padding-bottom: 10px;
//     border-bottom: 1px solid white;
//     color: ${(props) => props.theme.color};
//   }

//   margin-top: -20%;
//   overflow: hidden;
//   border-radius: 10px;
//   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
// `
