import { useState } from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/ui/Header'
import Drawer from '@/components/ui/Drawer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const handleCartIcon = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  return (
    <>
      <Header onCartIcon={handleCartIcon} />
      <Drawer isOpen={isDrawerOpen} onCartIcon={handleCartIcon}>loeleo</Drawer>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>hhehe</div>
    </main>
    </>
  )
}
