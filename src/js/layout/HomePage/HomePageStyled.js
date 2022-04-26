import styled from "styled-components"
import screenSize from "../../globals/screenSize"

const HomePageStyled = styled.main`
  @media ${screenSize.desktop} {
    display: grid;
    grid-template-rows: 10vh repeat(2, 500px) 10vh;
    grid-template-columns: 1fr 132px;
    /* grid-gap: 1rem; */
    height: 100vh;
    width: 100vw;
    grid-template-areas:
      "header header header header right"
      "hero hero hero hero right"
      "main main main main right"
      "footer footer footer footer right";
  }

  @media ${screenSize.laptop} {
    display: grid;
    grid-template-rows: 20vh repeat(2, 500px) 20vh;
    grid-template-columns: 1fr 132px;
    grid-template-areas:
      "header header header header right"
      "hero hero hero hero right"
      "main main main main right"
      "footer footer footer footer right";
  }

  @media ${screenSize.mobileL} {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 10vh 1fr 10vh;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "footer";
  }
`
export default HomePageStyled
