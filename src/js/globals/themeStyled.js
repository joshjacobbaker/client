import screenSize from "./screenSize"
import colors from "./colors"
import sectionSizes from "./sectionSizes"

// Darken green and lighten pink
const themeNanah = {
  baseTheme: {
    id: "baseTheme",
    fg: "#545f3d",
    bg: "#384126d0",
    color: "#ffffffe2",
    secondaryColor: "#8fC1E3",
    tirtiaryColor: "#F7F9FB",
    backgroundColor: "linear-gradient(to right, #894545c5, #fe9c9ce0)",
    modalBackgroundColor: "linear-gradient(to right, #ad930095,#52740d80)",
    screenSize,
    // colors,
    sectionSizes,
  },

  darkTheme: {
    id: "darkTheme",
    fg: "#fe9c9ce0",
    bg: "#894545c5",
    color: "#ffffffe1",
    backgroundColor: "linear-gradient(to right, #343e1fd0, #35431a)",
    modalBackgroundColor: "linear-gradient(to right, #ad930091, #f0929285)",
    screenSize,
    // colors,
    sectionSizes,
  },
}

const themeDark = {
  baseTheme: {
    id: "baseTheme",
    fg: "#89b82b",
    bg: "#83b324d0",
    color: "#ffffffe2",
    secondaryColor: "#8fC1E3",
    tirtiaryColor: "#F7F9FB",
    backgroundColor: "linear-gradient(to right, #8f4a00, #ffe13a)",
    modalBackgroundColor: "linear-gradient(to right, #ad930095,#52740d80)",
    screenSize,
    // colors,
    sectionSizes,
  },

  darkTheme: {
    id: "darkTheme",
    fg: "#ea7272",
    bg: "#f09292b4",
    color: "#ffffffe1",
    backgroundColor: "linear-gradient(to right, #8f4a00, #ffe13a)",
    modalBackgroundColor: "linear-gradient(to right, #ad930091, #f0929285)",
    screenSize,
    // colors,
    sectionSizes,
  },
}

const themeLight = {
  baseTheme: {
    id: "baseTheme",
    fg: "#89b82bc2",
    bg: "#83b324cf",
    color: "#ffffff",
    secondaryColor: "#8fc1e3e1",
    tirtiaryColor: "#F7F9FB",
    backgroundColor: "linear-gradient(to right, #8f4a00d5, #ffe13ac9)",
    modalBackgroundColor: "linear-gradient(to right, #ad930092,#52740d9b)",
    screenSize,
    // colors,
    sectionSizes,
  },

  darkTheme: {
    id: "darkTheme",
    fg: "#ea7272ca",
    bg: "#f09292d2",
    color: "#ffffff",
    backgroundColor: "linear-gradient(to right, #8f4a00d2, #ffe13acc)",
    modalBackgroundColor: "linear-gradient(to right, #ad9300bc, #f09292c7)",
    screenSize,
    // colors,
    sectionSizes,
  },
}

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
})

export default themeNanah

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

//Gold
// #ad9300
//Green
// #4A5D23
// pink
// #ff878d
