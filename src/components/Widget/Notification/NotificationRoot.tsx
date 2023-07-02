type NotificationRootProps = {
  children: React.ReactNode
}

export function NotificationRoot({ children }: NotificationRootProps) {
  return (
    <li className='px-8 py-4 flex gap-6 bg-zinc-200 dark:bg-zinc-900'>
      {children}
    </li>
  )
}