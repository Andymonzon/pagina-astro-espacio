'use client'
import { createContext, useContext, useState } from 'react'

interface IContext {
  activeLinkId: string
  setActiveLinkId: React.Dispatch<React.SetStateAction<string>>
}

export const NavContext = createContext<IContext>({
  activeLinkId: '',
  setActiveLinkId: () => { }
})

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeLinkId, setActiveLinkId] = useState('')

  return (
    <NavContext.Provider value={{
      activeLinkId,
      setActiveLinkId
    }}>
      {children}
    </NavContext.Provider>
  )
}

export const useNavContext = () => {
  const context = useContext(NavContext)

  if (context == null) throw new Error('useNavContext must be used within a NavProvider')

  return context
}
