import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/ui/Header'
import Drawer from '@/components/ui/Drawer'
import Cart from '@/components/cart/Cart'
import ProductList from '@/components/products/ProductList'
import { useProductStore } from '@/store/useProductStore'
import { Dna } from 'react-loader-spinner'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const { products, isLoading, error, fetchData } = useProductStore()

  useEffect(() => {
    // call the fetchdata function
    fetchData()
  }, [fetchData])

  const handleCartIcon = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  return (
    <>
      <Header onCartIcon={handleCartIcon} />
      <Drawer isOpen={isDrawerOpen} onCartIcon={handleCartIcon}>
        <Cart />
      </Drawer>
      <main className={`container mx-auto md:w-10/12 py-8 px-4 ${inter.className}`} >
        {isLoading ? <div className='flex items-center justify-center'>
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div> : <ProductList products={products} />}
    </main>
    </>
  )
}
