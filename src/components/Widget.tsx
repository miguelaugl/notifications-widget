import { Rocket, X, Check } from 'lucide-react'

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 bg-zinc-800">
        <span className='font-bold text-zinc-50'>Notifications</span>
        <button className="text-xs uppercase text-violet-500 font-bold hover:text-violet-400 cursor-pointer">Mark all as read</button>
      </div>

      <div>
        <div className="px-5 py-2 bg-zinc-950 text-zinc-400 text-sm">Recentes</div>

        <ul className='divide-y-2 divide-zinc-950'>
          <li className='px-8 py-4 flex gap-6 bg-zinc-900'>
            <Rocket className='w-6 h-6 text-violet-500 mt-2' />

            <div className='flex flex-col flex-1 gap-2'>
              <p className='text-sm leading-relaxed text-zinc-100'>You received a new notification from John Doe to join Rocketseat</p>
              <div className='text-2xs text-zinc-500 gap-1 flex'>
                <span>Invite</span>
                <span>Two hours ago</span>
              </div>
            </div>
          </li>

          <li className='px-8 py-4 flex gap-6 bg-zinc-900'>
            <Rocket className='w-6 h-6 text-violet-500 mt-2' />

            <div className='flex flex-col flex-1 gap-2'>
              <p className='text-sm leading-relaxed text-zinc-100'>You received a new notification from John Doe to join Rocketseat</p>
              <div className='text-2xs text-zinc-500 gap-1 flex'>
                <span>Invite</span>
                <span>Two hours ago</span>
              </div>
            </div>
            
            <div className='flex gap-2'>
              <button className='w-8 h-8 rounded flex items-center justify-center bg-zinc-800 hover:bg-zinc-700'>
                <X className='w-3 text-zinc-50'/>
              </button>
              <button className='w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-600'>
                <Check className='w-3 text-zinc-50'/>
              </button>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <div className="px-5 py-2 bg-zinc-950 text-zinc-400 text-sm">Antigas</div>

        <ul className='divide-y-2 divide-zinc-950'>
          <li className='px-8 py-4 flex gap-6 bg-zinc-900'>
            <Rocket className='w-6 h-6 text-violet-500 mt-2' />

            <div className='flex flex-col flex-1 gap-2'>
              <p className='text-sm leading-relaxed text-zinc-500'>You received a new notification from John Doe to join Rocketseat</p>
              <div className='text-2xs text-zinc-500 gap-1 flex'>
                <span>Invite</span>
                <span>Two hours ago</span>
              </div>
            </div>
          </li>

          <li className='px-8 py-4 flex gap-6 bg-zinc-900'>
            <Rocket className='w-6 h-6 text-violet-500 mt-2' />

            <div className='flex flex-col flex-1 gap-2'>
              <p className='text-sm leading-relaxed text-zinc-500'>You received a new notification from John Doe to join Rocketseat</p>
              <div className='text-2xs text-zinc-500 gap-1 flex'>
                <span>Invite</span>
                <span>Two hours ago</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}