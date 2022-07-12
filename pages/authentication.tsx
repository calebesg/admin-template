import { FormEvent, useState } from 'react'
import classNames from 'classnames'
import { useAuth } from '../data/hook'

import { AuthInput } from '../components/auth/AuthInput'
import { Button } from '../components/auth/Button'
import { Warning } from '../components/icons'

type Mode = 'signIn' | 'signUp'

export default function Authentication() {
  const {
    loginWithEmailAndPassword,
    createUserWithEmailAndPassword,
    loginGoogle,
  } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<Mode>('signIn')
  const [error, setError] = useState<string | null>(null)

  const renderError = (message: string, timer = 6) => {
    setError(message)
    setTimeout(() => setError(null), timer * 1000)
  }

  const handleSubmit = async function (event: FormEvent) {
    event.preventDefault()

    if (!email || !password) return null

    try {
      if (mode === 'signIn') {
        await loginWithEmailAndPassword(email, password)
        return
      }

      await createUserWithEmailAndPassword(email, password)
    } catch (e: any) {
      renderError(e.message)
    }
  }

  return (
    <div className="h-screen flex justify-end items-center">
      <div className="h-full hidden md:block md:w-1/2 lg:w-full relative after:absolute after:inset-0 after:backdrop-blur-sm after:bg-black/30 backdrop-brightness-150">
        <img
          className="object-cover w-full h-full"
          src="https://source.unsplash.com/random"
          alt="background"
        />
      </div>

      <main className="p-10 gap-6 flex flex-col items-center w-full md:w-1/2 lg:w-[600px]">
        <h1 className="text-2xl font-bold text-gray-700">
          {mode === 'signIn' ? 'Enter you account' : 'Sign up for the platform'}
        </h1>

        <div
          className={classNames(
            'w-full items-center gap-2 text-red-600 bg-red-50 border border-red-500 rounded-lg px-4 py-3',
            {
              flex: error,
              hidden: !error,
            }
          )}
        >
          {Warning()}
          <span>{error}</span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full pb-6 flex flex-col gap-4 border-b border-gray-300"
        >
          <AuthInput
            label="E-mail"
            data={{
              id: 'email',
              type: 'email',
              value: email,
              placeholder: 'Enter a email',
              onChange: e => setEmail(e.target.value),
              required: true,
            }}
          />

          <AuthInput
            label="Password"
            data={{
              id: 'password',
              type: 'password',
              value: password,
              placeholder: 'Enter you password',
              onChange: e => setPassword(e.target.value),
              required: true,
            }}
          />

          <footer className="mt-6">
            <Button color="blue">
              {mode === 'signIn' ? 'SignIn' : 'SignUp'}
            </Button>
          </footer>
        </form>

        <Button color="red" onClick={loginGoogle}>
          Enter with Google
        </Button>

        <div className="flex justify-start w-full mt-2 gap-2">
          {mode === 'signIn'
            ? 'New around here?'
            : 'Is already part of the community?'}
          <a
            className="text-blue-500 hover:text-blue-700 transition-colors cursor-pointer"
            onClick={() => setMode(mode === 'signIn' ? 'signUp' : 'signIn')}
          >
            {mode === 'signIn' ? 'Sign Up' : 'Sign In'}
          </a>
        </div>
      </main>
    </div>
  )
}
