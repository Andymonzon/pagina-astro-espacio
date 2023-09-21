import { useState, useEffect, useRef } from 'react'

export const usePerspective = () => {
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

      const rotationX = ((pageX - halfWidth) / halfWidth) * 20
      const rotationY = ((pageY - halfHeight) / halfHeight) * 20
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

  const handleMouseEnter = () => {
    setEnabled(true)
  }

  const handleMouseLeave = () => {
    setEnabled(false)
  }

  return {
    enabled,
    position,
    ref,
    handleMouseEnter,
    handleMouseLeave
  }
}
