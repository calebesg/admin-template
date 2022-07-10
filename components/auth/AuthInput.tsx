import { InputHTMLAttributes } from 'react'

interface Input extends InputHTMLAttributes<HTMLInputElement> {}

interface AuthInputProps {
  label: string
  data: Input
}

export function AuthInput(props: AuthInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.data.id}>{props.label}</label>
      <input
        className="px-4 py-3 mt-2 rounded-lg bg-gray-200 border focus:bg-white focus:border-blue-500 focus:outline-none placeholder:text-gray-500"
        {...props.data}
      />
    </div>
  )
}
