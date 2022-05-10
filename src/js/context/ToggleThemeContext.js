import { createContext, useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../globals/themeStyled"
import GlobalStyled from "../../js/globals/GlobalStyled"

const ToggleThemeContext = createContext()

export function ToggleThemeProvider({ children }) {
  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem("theme")
    setToggleTheme(localStorageTheme || "light")
  }, [])

  const [toggleTheme, setToggleTheme] = useState("light")

  const toggleThemeHandler = () => {
    if (toggleTheme === "light") {
      setToggleTheme("dark")
      window.localStorage.setItem("theme", "dark")
      console.log(toggleTheme)
    } else {
      setToggleTheme("light")
      window.localStorage.setItem("theme", "light")
      console.log(toggleTheme)
    }
  }

  return (
    <ToggleThemeContext.Provider value={{ item: 1, toggleThemeHandler, toggleTheme }}>
      <GlobalStyled />
      <ThemeProvider theme={toggleTheme === "light" ? theme.baseTheme : theme.darkTheme}>{children}</ThemeProvider>
    </ToggleThemeContext.Provider>
  )
}

export default ToggleThemeContext
