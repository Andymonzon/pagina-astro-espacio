import { useRef, useEffect } from 'react'
import { useOnScreen } from './useOnScreen'
import { useNavContext } from '@/context'
import { type Routes } from '@/models'

export const useNav = (navLinkId: Routes) => {
  const ref = useRef<HTMLDivElement>(null)
  const { setActiveLinkId } = useNavContext()

  const isOnScren = useOnScreen(ref)

  useEffect(() => {
    if (isOnScren) {
      setActiveLinkId(navLinkId)
    }
  }, [isOnScren, navLinkId, setActiveLinkId])

  return ref
}
