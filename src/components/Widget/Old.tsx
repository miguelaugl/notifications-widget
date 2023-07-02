import { Mail, ThumbsUp } from 'lucide-react'

import { Notification } from './Notification'

export function Old() {
  const nowInMilliseconds = Date.now()
  const twoHoursAgo = new Date(nowInMilliseconds - 1000 * 60 * 60 * 2)

  return (
    <>
      <div className="px-5 py-2 bg-zinc-300 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 text-sm">
        Old
      </div>

      <ul className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
        <Notification.Root>
          <Notification.Icon icon={Mail} />
          <Notification.Content
            text="You received a new notification from John Doe to join Rocketseat"
            date={twoHoursAgo}
            seen
          />
          <Notification.Action
            className="bg-emerald-500 dark:bg-emerald-500"
            icon={ThumbsUp}
          />
        </Notification.Root>
        <Notification.Root>
          <Notification.Content
            text="You received a new notification from John Doe to join Rocketseat"
            date={twoHoursAgo}
            seen
          />
          <Notification.Actions />
        </Notification.Root>
      </ul>
    </>
  )
}
