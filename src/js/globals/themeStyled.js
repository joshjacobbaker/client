import screenSize from "./screenSize"
import colors from "./colors"
import sectionSizes from "./sectionSizes"

// Define our `fg` and `bg` on the theme
const theme = {
  baseTheme: {
    id: "baseTheme",
    fg: "#89b82b",
    bg: "#83b324d0",
    color: "#4A5D23",
    secondaryColor: "#8fC1E3",
    tirtiaryColor: "#F7F9FB",
    backgroundColor: "linear-gradient(to right, #ffe13a, #8f4a00)",
    modalBackgroundColor: "linear-gradient(to right, #52740d9c, #ad9300)",
    screenSize,
    // colors,
    sectionSizes,
  },

  darkTheme: {
    id: "darkTheme",
    fg: "#ea7272",
    bg: "#f09292b4",
    // color: "#4A5D23",
    backgroundColor: "linear-gradient(to right, #8f4a00, #ffe13a)",
    modalBackgroundColor: "linear-gradient(to right, #ad9300, #f09292b4)",
    screenSize,
    // colors,
    sectionSizes,
  },
}
//Gold
// #ad9300
//Green
// #4A5D23
// pink
// #ff878d

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
})

export default theme

// Blue

// id: "darkTheme",
// fg: "#8E8268",
// bg: "#474853",
// color: "#AAA0A0",
// backgroundColor: "linear-gradient(to right, #86B3D1, #5085A5)",

// id: "baseTheme",
// fg: "#687864",
// bg: "#31708E",
// color: "#5085A5",
// secondaryColor: "#8fC1E3",
// tirtiaryColor: "#F7F9FB",
// backgroundColor: "linear-gradient(to right, #8fC1E3, #F7F9FB)",
