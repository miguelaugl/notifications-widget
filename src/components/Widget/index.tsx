import { Header } from './Header'
import { Recent } from './Recent'
import { Old } from './Old'

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <Header />
      <Recent />
      <Old />
    </div>
  )
}