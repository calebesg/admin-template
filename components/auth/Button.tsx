import classNames from 'classnames'

interface ButtonProps {
  children: any
  color: 'blue' | 'red' | 'gray' | 'green'
  onClick?: () => void
}

export function Button(props: ButtonProps) {
  return (
    <button
      className={classNames(
        'w-full text-white rounded-lg px-4 py-3 transition-colors',
        {
          'bg-indigo-500 hover:bg-indigo-600': props.color === 'blue',
          'bg-red-500 hover:bg-red-600': props.color === 'red',
          'bg-gray-500 hover:bg-gray-600': props.color === 'gray',
          'bg-green-500 hover:bg-green-600': props.color === 'green',
        }
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
