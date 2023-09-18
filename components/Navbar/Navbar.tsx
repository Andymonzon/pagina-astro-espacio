import Link from 'next/link'
import './Navbar.css'

const Routes = [
  {
    name: 'HOME',
    href: '#home'
  },
  {
    name: 'INFORMATION',
    href: '#information'
  },
  {
    name: 'MARS',
    href: '#mars'
  },
  {
    name: 'GALLERY',
    href: '#gallery'
  }
]

function Navbar () {
  return (
    <header className='w-full py-5 fixed flex items-center justify-center'>
      <nav>
        <ul className='flex'>
          {
            Routes.map((route) => {
              return (
                <li key={route.href}>
                  <Link className='relative hover-lines py-1 px-4 font-normal text-gray-200 text-sm rounded' href={route.href}>{route.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
