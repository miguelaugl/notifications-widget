import { getRelativeDate } from "@/helpers/getRelativeDate"

type NotificationContentProps = {
  text: React.ReactNode
  date: Date
  seen?: boolean
}

export function NotificationContent({ text, date, seen }: NotificationContentProps) {
  return (
    <div className='flex flex-col flex-1 gap-2'>
      <p className={`text-sm leading-relaxed text-zinc-${seen ? '500' : '600'} dark:text-zinc-${seen ? '500' : '100'}`}>{text}</p>
      <div className='text-2xs text-zinc-500 gap-1 flex'>
        <span>Convite</span>
        <span>{getRelativeDate(date)}</span>
      </div>
    </div>
  )
}