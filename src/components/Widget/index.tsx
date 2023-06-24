import { Header } from './Header'
import { Recent } from './Notifications/Recent'
import { Old } from './Notifications/Old'

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <Header />
      <Recent />
      <Old />
    </div>
  )
}