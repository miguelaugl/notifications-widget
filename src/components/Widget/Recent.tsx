import { Rocket, Mail } from 'lucide-react'

import { Notification } from './Notification'

export function Recent() {
  const nowInMilliseconds = Date.now()
  const fiveHoursAgo = new Date(nowInMilliseconds - 1000 * 60 * 60 * 5)

  return (
    <>
      <div className="px-5 py-2 bg-zinc-300 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 text-sm">
        Recent
      </div>

      <ul className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
        <Notification.Root>
          <Notification.Icon icon={Rocket} />
          <Notification.Content
            text="You received a new notification from John Doe to join Rocketseat"
            date={fiveHoursAgo}
          />
          <Notification.Actions />
        </Notification.Root>
        <Notification.Root>
          <Notification.Icon icon={Mail} />
          <Notification.Content
            text="You received a new notification from John Doe to join Rocketseat"
            date={fiveHoursAgo}
          />
        </Notification.Root>
      </ul>
    </>
  )
}
