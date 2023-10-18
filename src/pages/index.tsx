import { useState } from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/ui/Header'
import Drawer from '@/components/ui/Drawer'
import Cart from '@/components/cart/Cart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const handleCartIcon = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  return (
    <>
      <Header onCartIcon={handleCartIcon} />
      <Drawer isOpen={isDrawerOpen} onCartIcon={handleCartIcon}>
        <Cart />
      </Drawer>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>hhehe</div>
    </main>
    </>
  )
}
