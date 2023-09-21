'use client'
import Link from 'next/link'
import './Navbar.css'
import { useNavContext } from '@/context'
import { IconMenuDeep, IconX } from '@tabler/icons-react'
import { useState } from 'react'

const Routes = [
  {
    name: 'HOME',
    href: 'home'
  },
  {
    name: 'NEWS',
    href: 'news'
  },
  {
    name: 'MARS',
    href: 'mars'
  },
  {
    name: 'GALLERY',
    href: 'gallery'
  }
]

function Navbar () {
  const [click, setClick] = useState(false)
  const { activeLinkId } = useNavContext()

  const openMenu = () => {
    setClick(true)
  }

  const closeMenu = () => {
    setClick(false)
  }

  return (
    <header className='w-full py-5 fixed flex items-center z-[100]'>
      <div className='sm:hidden w-full flex items-center justify-end px-3'>
        <button aria-label='Menu' className='backdrop-blur bg-zinc-800/20 p-2' onClick={openMenu}>
          <IconMenuDeep />
        </button>
      </div>

      {/* pc */}
      <nav className='hidden sm:block mx-auto'>
        < ul className='flex gap-1 items-center justify-center w-full'>
          {
            Routes.map((route) => {
              return (
                <li key={route.href}>
                  <Link scroll={false} className={`relative hover-lines py-1 px-4 font-normal text-sm rounded ${activeLinkId === route.href ? 'active' : ''}`} href={`#${route.href}`}>{route.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>

      {/* phone */}
      <nav className={`min-h-screen sm:hidden fixed p-5 w-[90%] top-0 right-0 duration-300 bg-black/50 backdrop-blur-lg flex flex-col gap-10 items-end ${click ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
        <header className='flex items-center justify-center w-full relative'>
          <h2 className='text-xl text-center'>Menu</h2>
          <button aria-label='Close Menu' className='absolute right-2' onClick={closeMenu}>
            <IconX />
          </button>
        </header>
        < ul className='flex flex-col gap-1 items-center justify-center w-full'>
          {
            Routes.map((route) => {
              return (
                <li key={route.href}>
                  <Link scroll={false} onClick={() => { setClick(false) }} className={`relative hover-lines py-1 px-4 font-normal text-gray-200 text-sm rounded ${activeLinkId === route.href ? 'active' : ''}`} href={`#${route.href}`}>{route.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header >
  )
}

export default Navbar
