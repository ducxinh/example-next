import { Footer } from './Footer'
import { Header } from './Header'

import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
