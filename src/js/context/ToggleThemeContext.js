import { createContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../globals/themeContextStyled"
import GlobalStyled from "../../js/globals/GlobalStyled"

const ToggleThemeContext = createContext()

export function ToggleThemeProvider({ children }) {
  const [toggleActive, setToggleActive] = useState(false)

  const toggleThemeHandler = () => {
    setToggleActive((prevState) => !prevState)
    console.log("clicked")
  }

  return (
    <ToggleThemeContext.Provider value={{ item: 1, toggleThemeHandler, toggleActive }}>
      <GlobalStyled />
      <ThemeProvider theme={toggleActive ? theme.baseTheme : theme.darkTheme}>{children}</ThemeProvider>
    </ToggleThemeContext.Provider>
  )
}

// const [theme, setTheme] = useState(themeStyled.darkTheme)
// const [isDarkMode, setDarkMode] = useState(false)

// const handleToggle = () => {
//   setDarkMode(!isDarkMode)
//   console.log(isDarkMode.tostring())
// }

export default ToggleThemeContext
