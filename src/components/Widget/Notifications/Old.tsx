import { Rocket } from 'lucide-react'
import { NotificationItem } from './Item'

export function Old() {
  const nowInMilliseconds = Date.now()
  const twoHoursAgo = new Date(nowInMilliseconds - 1000 * 60 * 60 * 2)
  
  return (
    <>
      <div className="px-5 py-2 bg-zinc-950 text-zinc-400 text-sm">Antigas</div>

      <ul className='divide-y-2 divide-zinc-950'>
        <NotificationItem 
          icon={Rocket}
          title='You received a new notification from John Doe to join Rocketseat'
          type='invite'
          date={twoHoursAgo}
          seen
        />

        <NotificationItem 
          icon={Rocket}
          title='You received a new notification from John Doe to join Rocketseat'
          type='invite'
          date={twoHoursAgo}
          seen
        />
      </ul>
    </>
  )
}