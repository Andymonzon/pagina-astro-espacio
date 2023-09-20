import { useState, useEffect } from 'react'

export const useOnScreen = (ref: React.RefObject<any>) => {
  const [isOnScreen, setIsOnScreen] = useState(false)

  const observer = new IntersectionObserver(([entry]) => {
    setIsOnScreen(entry.isIntersecting)
  }, { root: null, rootMargin: '0px', threshold: 0.5 })

  useEffect(() => {
    observer.observe(ref.current)

    return () => { observer.disconnect() }
  }, [])

  return isOnScreen
}
