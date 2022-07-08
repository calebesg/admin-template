import { createContext, useState } from 'react'
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

  const changeTheme = () => setTheme(theme === '' ? 'dark' : '')

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
