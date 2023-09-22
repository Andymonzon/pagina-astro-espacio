import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import Link from 'next/link'

function Footer () {
  return (
    <footer className='w-full flex gap-5 justify-center'>
      <Link href='https://github.com/Andymonzon' target='_blank' className='hover:text-gray-400'>
        <IconBrandGithub />
      </Link>
      <Link href='https://www.linkedin.com/in/andresvmonzon/' target='_blank' className='hover:text-gray-400'>
        <IconBrandLinkedin />
      </Link>
    </footer>
  )
}

export default Footer
