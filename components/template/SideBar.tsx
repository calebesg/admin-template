import { Home, Adjustments, Notification, LogOut } from '../icons'
import { Logo } from './Logo'
import { MenuItem } from './MenuItem'

export function SideBar() {
  return (
    <aside className="flex flex-col">
      <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-800">
        <Logo />
      </div>

      <nav className="flex-1 flex flex-col justify-between">
        <ul>
          <MenuItem icon={Home} text="Home" url="/" />
          <MenuItem icon={Adjustments} text="Adjustments" url="/adjustment" />
          <MenuItem
            icon={Notification}
            text="Notification"
            url="/notification"
          />
        </ul>

        <ul>
          <MenuItem
            className="text-red-600 hover:bg-red-300 hover:text-white transition-colors"
            icon={LogOut}
            text="LogOut"
            onClick={() => console.log('Logout')}
          />
        </ul>
      </nav>
    </aside>
  )
}
