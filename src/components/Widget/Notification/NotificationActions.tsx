import { Check, X } from 'lucide-react'

export function NotificationActions() {
  return (
    <div className="flex gap-2">
      <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700">
        <X className="w-3 text-zinc-50" />
      </button>
      <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-600">
        <Check className="w-3 text-zinc-50" />
      </button>
    </div>
  )
}
