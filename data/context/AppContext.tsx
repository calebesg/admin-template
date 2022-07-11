import { createContext, useEffect, useState } from 'react'
import { Theme, AppContextType } from './type'

const INITIAL_STATE: AppContextType = {
  theme: '',
  changeTheme: () => {},
}

const AppContext = createContext<AppContextType>(INITIAL_STATE)

interface AppProviderProps {
  children: any
}

export function AppProvider(props: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>('')

  const changeTheme = () => {
    const updatedTheme = theme === 'dark' ? '' : 'dark'

    setTheme(updatedTheme)
    localStorage.setItem('ad_template@theme', updatedTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('ad_template@theme') as Theme
    setTheme(savedTheme)
  }, [])

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
