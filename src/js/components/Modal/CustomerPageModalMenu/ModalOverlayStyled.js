import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const ModalStyled = styled(motion.div)`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
  ${({ theme }) => css`
    background: ${theme.modalOverlayBackgroundColor};
    color: ${theme.modalOverlayFontColor};
  `}
  z-index: 2;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  > ul {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    height: 100%;
    width: 100%;
    list-style: none;

    /* border: 1px solid white; */
    border-radius: 10px;
    overflow-wrap: normal;
    text-transform: capitalize;

    > li {
      display: grid;
      justify-items: center;
      align-items: center;
      /* text-align: center; */
      cursor: pointer;
      font-size: 2rem;
      height: 100%;
      width: 100%;
      margin: 0 0;
      padding: 0 0;
      overflow-x: hidden;
      color: white;
      border-bottom: 1px solid white;
      border-bottom-width: 80%;
      /* background: blue; */
      &:hover {
        font-size: 2.5rem;
      }
    }

    > li:last-child {
      border-bottom: none;
    }
  }
`

export default ModalStyled
