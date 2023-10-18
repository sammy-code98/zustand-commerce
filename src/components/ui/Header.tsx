import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { CartButton } from '../../utils/types';



export default function Header({ onCartIcon }: CartButton) {
    return (
        <header className='bg-blue-600 text-white py-4 flex items-center justify-between h-16 sticky top-0 z-10'>
            <nav className='container mx-auto md:w-10/12 px-4 flex justify-between'>
                <span className='text-lg font-semibold'>Zustand Commerce</span>
                <div className='relative'>
                    <button type='button' className='text-white text-xl flex items-center' onClick={onCartIcon}>
                        <FiShoppingCart />
                        <div className='text-white rounded-full bg-blue-300 w-5 h-5 text-sm -ml-1'>2</div>
                    </button>
                </div>

            </nav>
        </header>
    )
}
