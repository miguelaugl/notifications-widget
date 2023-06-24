import { getRelativeDate } from '@/helpers/getRelativeDate'
import { Check, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type NotificationType = 'invite' | 'mention' | 'message'

type NotificationItemProps = {
  icon: LucideIcon
  title: string
  type: NotificationType
  date: Date
  seen?: boolean
  selected?: boolean
}

function getNotificationType(type: NotificationType) {
  if (type === 'invite') return 'Invite'
  if (type === 'mention') return 'Mention'
  return 'Message'
}

export function NotificationItem({ icon: Icon, title, type, date, seen, selected }: NotificationItemProps) {
  return (
    <li className='px-8 py-4 flex gap-6 bg-zinc-200 dark:bg-zinc-900'>
      <Icon className='w-6 h-6 text-violet-500 mt-2' />

      <div className='flex flex-col flex-1 gap-2'>
        <p className={`text-sm leading-relaxed text-zinc-${seen ? '500' : '600'} dark:text-zinc-${seen ? '500' : '100'}`}>{title}</p>
        <div className='text-2xs text-zinc-500 gap-1 flex'>
          <span>{getNotificationType(type)}</span>
          <span>{getRelativeDate(date)}</span>
        </div>
      </div>

      {selected && (
        <div className='flex gap-2'>
          <button className='w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700'>
            <X className='w-3 text-zinc-50'/>
          </button>
          <button className='w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-600'>
            <Check className='w-3 text-zinc-50'/>
          </button>
        </div>
      )}
    </li>
  )
}