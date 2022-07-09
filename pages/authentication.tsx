import { FormEvent, useState } from 'react'
import { AuthInput } from '../components/auth/AuthInput'
import { Button } from '../components/auth/Button'

type Mode = 'signIn' | 'signUp'

export default function Authentication() {
  const [mode, setMode] = useState<Mode>('signIn')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = function (event: FormEvent) {
    event.preventDefault()
    console.warn(mode, email, password)
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

      <main className="p-10 flex flex-col items-center w-full md:w-1/2 lg:w-[600px]">
        <h1 className="text-xl font-bold text-gray-700">
          {mode === 'signIn' ? 'Enter you account' : 'Sign up for the platform'}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full mb-6 pb-6 mt-10 flex flex-col gap-4 border-b border-gray-300"
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

        <Button color="red">Enter with Google</Button>

        <div className="flex justify-start w-full mt-8 gap-2">
          {mode === 'signIn'
            ? 'New around here?'
            : 'Is already part of the community?'}
          <button
            className="text-blue-500 hover:text-blue-700 transition-colors"
            onClick={() => setMode(mode === 'signIn' ? 'signUp' : 'signIn')}
          >
            {mode === 'signIn' ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </main>
    </div>
  )
}
