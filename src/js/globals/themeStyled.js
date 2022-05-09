import screenSize from "./screenSize"
import colors from "./colors"
import sectionSizes from "./sectionSizes"

// Define our `fg` and `bg` on the theme
const theme = {
  baseTheme: {
    id: "baseTheme",
    fg: "#687864",
    bg: "#31708E",
    color: "#5085A5",
    secondaryColor: "#8fC1E3",
    tirtiaryColor: "#F7F9FB",
    backgroundColor: "linear-gradient(to right, #8fC1E3, #F7F9FB)",
    modalBackgroundColor: "linear-gradient(to right, #71777196, #5860599f)",
    screenSize,
    colors,
    sectionSizes,
  },

  darkTheme: {
    id: "darkTheme",
    fg: "#8E8268",
    bg: "#474853",
    color: "#AAA0A0",
    backgroundColor: "linear-gradient(to right, #86B3D1, #5085A5)",
    modalBackgroundColor: "linear-gradient(to right, #71777196, #5860599f)",
    screenSize,
    colors,
    sectionSizes,
  },
}

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
})

export default theme
