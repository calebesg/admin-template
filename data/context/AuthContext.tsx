import Router from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import firebase from '../../firebase/config'
import User from '../../model/User'

interface AuthContextType {
  user?: User | null
  loginGoogle?: () => void
}

const AuthContext = createContext<AuthContextType>({})

const managerCookie = (logged: boolean) => {
  if (logged) {
    Cookies.set('admin-template-firebase', String(logged), { expires: 7 })
    return
  }

  Cookies.remove('admin-template-firebase')
}

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
  const [user, setUser] = useState<User | null>()
  const [loading, setLoading] = useState(true)

  const configSession = async (userFirebase: any) => {
    if (!userFirebase?.email) {
      setUser(null)
      managerCookie(false)
      setLoading(false)
      return false
    }

    const user = await normalizeUser(userFirebase)
    setUser(user)
    managerCookie(true)
    setLoading(false)
    return true
  }

  const loginGoogle = async () => {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())

    configSession(response.user)
    Router.push('/')
  }

  useEffect(() => {
    const killObserver = firebase.auth().onIdTokenChanged(configSession)
    return () => killObserver()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
