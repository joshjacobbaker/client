import screenSize from "./screenSize"

// Define our `fg` and `bg` on the theme
const theme = {
  baseTheme: {
    fg: "palevioletred",
    bg: "white",
    color: "orange",
    backgroundColor: "orange",
    screenSize,
  },

  darkTheme: {
    fg: "white",
    bg: "palevioletred",
    color: "purple",
    backgroundColor: "green",
    screenSize,
  },
}

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
})

export default theme
