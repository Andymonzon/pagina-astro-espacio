'use client'

import { useNav } from '@/hooks/useNav'
import { type Routes } from '@/models'

interface Props {
  children: React.ReactNode
  nameId: Routes
}

function ContainerObserver ({ children, nameId }: Props) {
  const ref = useNav(nameId)

  return (
    <div ref={ref}>{children}</div>
  )
}

export default ContainerObserver
