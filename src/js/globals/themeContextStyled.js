import screenSize from "./screenSize"
import colors from "./colors"
import sectionSizes from "./sectionSizes"

// Define our `fg` and `bg` on the theme
const theme = {
  baseTheme: {
    id: "baseTheme",
    fg: "#16A34A",
    bg: "#15803D",
    color: "#166534",
    backgroundColor: "linear-gradient(to right, green, yellow)",
    screenSize,
    colors,
    sectionSizes,
  },

  darkTheme: {
    id: "darkTheme",
    fg: "#8E8268",
    bg: "#474853",
    color: "#AAA0A0",
    backgroundColor: "linear-gradient(to right, #86B3D1, #844D36)",
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
