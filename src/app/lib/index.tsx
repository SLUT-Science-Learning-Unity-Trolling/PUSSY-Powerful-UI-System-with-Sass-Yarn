import { ReactNode } from 'react'
import { ReactStrictModeProvider } from './ReactStrictModeProvider'
import { RouterProvider } from './RouterProvider'

interface CombinedProvidersProps {
  children: ReactNode
}

export const CombinedProviders = ({ children }: CombinedProvidersProps) => {
  return (
    <ReactStrictModeProvider>
      <RouterProvider>{children}</RouterProvider>
    </ReactStrictModeProvider>
  )
}
