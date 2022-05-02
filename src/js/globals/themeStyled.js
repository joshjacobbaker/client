import screenSize from "./screenSize"
import colors from "./colors"
import sectionSizes from "./sectionSizes"

// Define our `fg` and `bg` on the theme
const theme = {
  baseTheme: {
    id: "baseTheme",
    fg: "palevioletred",
    bg: "white",
    color: "orange",
    backgroundColor: "orange",
    screenSize,
    colors,
    sectionSizes,
  },

  darkTheme: {
    id: "darkTheme",
    fg: "white",
    bg: "palevioletred",
    color: "purple",
    backgroundColor: "green",
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
