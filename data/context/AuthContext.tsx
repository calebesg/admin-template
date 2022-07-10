import Router from 'next/router'
import { createContext, useState } from 'react'
import firebase from '../../firebase/config'
import User from '../../model/User'

interface AuthContextType {
  user?: User
  loginGoogle?: () => void
}

const AuthContext = createContext<AuthContextType>({})

const normalizeUser = async (user: firebase.User): Promise<User> => {
  const token = await user.getIdToken()

  return {
    token,
    uid: user.uid,
    name: user.displayName || '',
    email: user.email || '',
    avatarUrl: user.photoURL || '',
    provider: user.providerData[0]?.providerId || '',
  }
}

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User>()

  const loginGoogle = async () => {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())

    if (response.user === null) return

    const user = await normalizeUser(response.user)
    setUser(user)
    Router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
