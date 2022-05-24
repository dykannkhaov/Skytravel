import * as React from 'react'

type ThemeProviderValue = {
  darkTheme: boolean
  toggleTheme: () => void
}

const context = React.createContext<ThemeProviderValue | undefined>(undefined)

function ThemeProvider(props: { children: React.ReactNode }) {
  const [darkTheme, setDarkTheme] = React.useState(false)

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme)
  }

  React.useEffect(() => {
    if (darkTheme) document.body.style.backgroundColor = '#181a1b'
    else document.body.style.backgroundColor = 'white'
  }, [darkTheme])

  return <context.Provider value={{ darkTheme, toggleTheme }}>{props.children}</context.Provider>
}

function useToggleTheme() {
  const value = React.useContext(context)
  if (typeof value === 'undefined') {
    throw new Error('useToggleTheme has been called but component is not wrapped within a ThemeProvider')
  }
  return value
}

export { ThemeProvider, useToggleTheme }
