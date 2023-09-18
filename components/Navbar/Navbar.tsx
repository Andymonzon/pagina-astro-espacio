import Link from 'next/link'

const Routes = [
  {
    name: 'HOME',
    href: '#'
  },
  {
    name: 'INFORMATION',
    href: '#'
  },
  {
    name: 'MARS',
    href: '#'
  },
  {
    name: 'GALLERY',
    href: '#'
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
                  <Link className='py-1 px-4 font-normal text-gray-200 text-sm hover:bg-[#f1f1f155]' href={route.href}>{route.name}</Link>
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
