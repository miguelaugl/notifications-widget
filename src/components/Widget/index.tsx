import { Header } from './Header'
import { Old } from './Old'
import { Recent } from './Recent'

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <Header />
      <Recent />
      <Old />
    </div>
  )
}
