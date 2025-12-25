import React from 'react'

function Header() {
  return (
    <>
        <header className='h-20 w-auto flex justify-between items-center bg-black px-4 md:px-64'>
          <div className='flex items-center text-3xl font-bold text-zinc-500'>Shaon</div>
          <div>
            <nav>
              <ul className='flex gap-8 text-white'>
                <li className='hover:text-zinc-500 cursor-pointer'>Home</li>
                <li className='hover:text-zinc-500 cursor-pointer'>About</li>
                <li className='hover:text-zinc-500 cursor-pointer'>Projects</li>
                <li className='hover:text-zinc-500 cursor-pointer'>Contact</li>
                
              </ul>
            </nav>
          </div>
        </header>
    </>
  )
}

export default Header