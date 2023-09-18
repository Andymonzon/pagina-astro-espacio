'use client'

import { useEffect, useRef, useState } from 'react'

function WelcomeSection () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current === null) return

    const { width, height } = ref.current.getBoundingClientRect()

    const halfWidth = width / 2
    const halfHeight = height / 2

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e

      const rotationX = ((pageX - halfWidth) / halfWidth) * 17
      const rotationY = ((pageY - halfHeight) / halfHeight) * 17
      setPosition({ x: rotationX, y: rotationY })
    }

    ref.current.addEventListener('mousemove', handleMouseMove)

    return () => {
      if (ref.current != null) {
        ref.current.removeEventListener('mousemove', handleMouseMove)
        setPosition({ x: 0, y: 0 })
      }
    }
  }, [enabled])

  return (
    <section
      ref={ref}
      onMouseEnter={() => { setEnabled(true) }}
      onMouseLeave={() => { setEnabled(false) }}
      className='w-full h-screen flex items-center justify-center'
    >
      <div className='flex items-center relative' style={{ perspective: '1000px' }}>
        <h1 className='text-7xl font-extralight tracking-[25px]'
          style={{ transform: `rotateX(${position.x}deg) rotateY(${position.y}deg)`, transitionDuration: '300ms', transitionTimingFunction: `${enabled ? 'ease-out' : 'none'}` }}>ASTRO</h1>
        <div className='absolute top-[-130%] left-[11%] blur border rounded-full w-[250px] h-[250px]'
          style={{ transform: `rotateX(${position.x}deg) rotateY(${position.y}deg)`, transitionDuration: '300ms', transitionTimingFunction: `${enabled ? 'ease-out' : 'none'}` }}></div>
      </div>
    </section >
  )
}

export default WelcomeSection
