import React from 'react'
import { DrawerProps } from '../../utils/types';

export default function Drawer({ children, isOpen, onCartIcon }: DrawerProps) {
    return (
        <div className='relative'>
            <div className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white transition  duration-700 ease-in-out transform z-50 
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                style={{ boxShadow: `${isOpen ? "rgba(0, 0, 0, 0.4) 0px 30px 30px" : ""}` }}

            >
                <aside className='h-full overflow-y-auto'>
                    <header className='bg-gray-900 text-white py-4 flex items-center justify-end px-4 h-14'>
                        <div>
                            <button onClick={onCartIcon}>Close</button>
                        </div>
                    </header>
                    <main className='bg-white p-4 text-black'>
                        {children}
                    </main>

                </aside>
            </div>
        </div>
    )
}
