export type Theme = 'dark' | ''

export interface AppContextType {
  theme: Theme
  changeTheme: () => void
}
