'use client'

import { IconChevronCompactDown } from '@tabler/icons-react'
import { usePerspective } from '../InformationSection/hooks/usePerspecive'

function WelcomeSection () {
  const { handleMouseEnter, handleMouseLeave, ref, position, enabled } = usePerspective()

  return (
    <section
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='w-full h-screen flex items-center justify-center'
    >
      <div className='flex flex-col items-center justify-center h-[calc(100vh-125px)]'>
        <div className='flex flex-grow items-center relative' style={{ perspective: '1000px' }}>
          <h1 className='text-3xl tracking-[15px] md:text-7xl md:ml-[7px] font-extralight md:tracking-[25px]'
            style={{ transform: `rotateX(${position.x}deg) rotateY(${position.y}deg)`, transitionDuration: '300ms', transitionTimingFunction: `${enabled ? 'ease-out' : 'none'}` }}>
            ASTR
            <span className='tracking-[0px]'>O</span>
          </h1>
          <div className='absolute flex flex-grow md:left-[14%] blur border rounded-full md:w-[250px] md:h-[250px] w-[170px] h-[170px] -left-[4%]'
            style={{ transform: `rotateX(${position.x}deg) rotateY(${position.y}deg)`, transitionDuration: '300ms', transitionTimingFunction: `${enabled ? 'ease-out' : 'none'}` }}>
          </div>
        </div>

        <div>
          <IconChevronCompactDown size={30} className='animate-bounce' />
        </div>
      </div>
    </section >
  )
}

export default WelcomeSection
