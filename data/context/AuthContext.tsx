import { createContext, useEffect, useState } from 'react'
import Router from 'next/router'
import Cookies from 'js-cookie'
import firebase from '../../firebase/config'
import User from '../../model/User'

interface AuthContextType {
  user?: User | null
  loading?: boolean
  loginWithEmailAndPassword: (email: string, password: string) => void
  createUserWithEmailAndPassword: (email: string, password: string) => void
  loginGoogle?: () => void
  logout?: () => void
}

const INITIAL_STATE: AuthContextType = {
  loginWithEmailAndPassword: (email: string, password: string) => {},
  createUserWithEmailAndPassword: (email: string, password: string) => {},
}

const AuthContext = createContext<AuthContextType>(INITIAL_STATE)

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
    try {
      setLoading(true)
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())

      await configSession(response.user)
      Router.push('/')
    } finally {
      setLoading(false)
    }
  }

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      setLoading(true)
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

      await configSession(response.user)
    } finally {
      setLoading(false)
    }
  }

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      setLoading(true)
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)

      await configSession(response.user)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await configSession(null)
      Router.push('/authentication')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-firebase')) {
      const killObserver = firebase.auth().onIdTokenChanged(configSession)
      return () => killObserver()
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
        loginWithEmailAndPassword,
        createUserWithEmailAndPassword,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
