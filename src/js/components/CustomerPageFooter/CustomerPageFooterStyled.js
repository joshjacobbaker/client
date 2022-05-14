import styled, { css } from "styled-components"

const FooterStyled = styled.footer`
  width: 100vw;
  ${({ theme }) =>
    css`
      background: ${theme.footerBackgroundColor};
      color: ${theme.footerFontColor};
    `}

  @media ${(props) => props.theme.screenSize.desktop} {
  }

  @media ${(props) => props.theme.screenSize.laptop} {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }

  @media ${(props) => props.theme.screenSize.mobileL} {
    position: fixed;
    height: 10vh;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    margin: 0 0;
    padding: 0 0;
  }
`

export default FooterStyled
