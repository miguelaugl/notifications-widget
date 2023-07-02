import React, { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type NotificationActionProps = {
  icon: ElementType
} & React.HTMLAttributes<HTMLButtonElement>

export function NotificationAction({
  icon: Icon,
  className,
  ...rest
}: NotificationActionProps) {
  return (
    <button
      className={twMerge(
        'w-8 h-8 rounded flex self-center items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700',
        className,
      )}
      {...rest}
    >
      <Icon className="w-3 text-zinc-50" />
    </button>
  )
}
