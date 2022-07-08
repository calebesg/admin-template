import { Moon, Sun } from '../icons'

interface ThemeButtonProps {
  value: string
  onChange: () => void
}

export function ThemeButton(props: ThemeButtonProps) {
  const Icon = props.value === 'dark' ? Sun : Moon

  return (
    <button
      className="hidden sm:flex flex-row-reverse items-center cursor-pointer rounded-full w-14 lg:w-24 h-8 p-1 bg-gradient-to-r from-cyan-500 to-purple-900 dark:from-yellow-300 dark:to-yellow-600 dark:flex-row transition-all"
      onClick={props.onChange}
    >
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-blue-600 dark:text-yellow-600 transition-colors">
        {Icon('w-4 h-4')}
      </div>

      <div className="flex-1 hidden lg:flex items-center justify-center">
        <span className="text-sm text-white">
          {props.value === 'dark' ? 'Claro' : 'Escuro'}
        </span>
      </div>
    </button>
  )
}
