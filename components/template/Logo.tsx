export function Logo() {
  return (
    <div className="flex gap-1 flex-col items-center justify-center w-10 h-10 rounded-full bg-white">
      <div className="bg-red-600 w-2 h-2 rounded-full" />
      <div className="flex gap-1">
        <div className="bg-yellow-500 w-2 h-2 rounded-full" />
        <div className="bg-green-500 w-2 h-2 rounded-full" />
      </div>
    </div>
  )
}
