export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-zinc-800">
      <span className='font-bold text-zinc-50'>Notifications</span>
      <button className="text-xs uppercase text-violet-500 font-bold hover:text-violet-400 cursor-pointer">Mark all as read</button>
    </header>
  )
}