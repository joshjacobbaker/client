import screenSize from "./screenSize"
import colors from "./colors"
import sectionSizes from "./sectionSizes"

// Darken green and lighten pink

// Golden top: #d8ab4e

// Golden bottom: #b48c36

// Charcoal Black: #040404

///

// Dark Green: #164A41

// Medium Green: #4D774E

// Light Green: #9DC88D

// Natural Yellow: #F1B24A

// White: #FFFFFF

///

// Olive: #A3BCB6

// Green Leaf: #39603D

// Brown Grey: #3C403D

// Tanly: #DADED4

// White: #FFFFFF

///

// Forest Green
// Pale Pink
// Champagne Gold

const themeNanah3 = {
  baseTheme: {
    id: "baseTheme",
    headerBackgroundColor: "#fff",
    headerFontColor: "#000",
    mainBackgroundColor: "#fff",
    mainFontColor: "#000",
    footerBackgroundColor: "#0e390e",
    footerFontColor: "#000",
    modalBackgroundColor: "#fff",
    modalFontColor: "#000",
    accentBackgroundColor: "#000",
    accentFontColor: "#fff",
    bg: "#faeec8c9",
    color: "#91a681b8",
    secondaryColor: "#8fC1E3",
    tirtiaryColor: "#F7F9FB",
    backgroundColor: "linear-gradient(to right, #fadaddc4,#91a681)",
    modalBackgroundColor: "linear-gradient(to right, #894545c5,#384126d0)",
    screenSize,
    sectionSizes,
  },

  darkTheme: {
    id: "darkTheme",
    headerBackgroundColor: "#fff",
    headerFontColor: "#000",
    mainBackgroundColor: "#fff",
    mainFontColor: "#000",
    footerBackgroundColor: "#0e390e",
    footerFontColor: "#000",
    modalBackgroundColor: "#fff",
    modalFontColor: "#000",
    accentBackgroundColor: "#000",
    accentFontColor: "#fff",
    fg: "#91a681b8",
    bg: "#faeec8cb",
    color: "#ffffffc2",
    backgroundColor: "linear-gradient(to right, #0e390e, #91a681c0)",
    modalBackgroundColor: "linear-gradient(to right, #894545c5, #384126d0)",
    screenSize,
    sectionSizes,
  },
}

const themeNanah2 = {
  baseTheme: {
    id: "baseTheme",
    fg: "#454547",
    bg: "#562424",
    color: "#ffffffe2",
    secondaryColor: "#8fC1E3",
    tirtiaryColor: "#F7F9FB",
    backgroundColor: "linear-gradient(to right, #24562B,#F3ADB8)",
    modalBackgroundColor: "linear-gradient(to right, #894545c5,#384126d0)",
    screenSize,
    // colors,
    sectionSizes,
  },

  darkTheme: {
    id: "darkTheme",
    fg: "#385E3C",
    bg: "#F3ADB8",
    color: "#ffffffe1",
    backgroundColor: "linear-gradient(to right, #24562B,#F3ADB8)",
    modalBackgroundColor: "linear-gradient(to right, #894545c5, #384126d0)",
    screenSize,
    // colors,
    sectionSizes,
  },
}

const themeNanah = {
  baseTheme: {
    id: "baseTheme",
    fg: "#545f3d",
    bg: "#384126d0",
    color: "#ffffffe2",
    secondaryColor: "#8fC1E3",
    tirtiaryColor: "#F7F9FB",
    backgroundColor: "linear-gradient(to right, #894545c5, #fe9c9ce0)",
    modalBackgroundColor: "linear-gradient(to right, #894545c5,#384126d0)",
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
    modalBackgroundColor: "linear-gradient(to right, #894545c5, #384126d0)",
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

export default themeNanah3

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
