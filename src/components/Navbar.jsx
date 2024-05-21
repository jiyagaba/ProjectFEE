import React, { useState } from 'react'
import Logo from '../images/forkifylogo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className='w-full fixed z-10 bg-white opacity-60'>
            <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
                <a href="/" className='flex items-center justify-center text-white text-lg cursor-pointer'>
                    <img src={Logo} alt="Logo" className='hidden md:block ' width = '300px'/>
                    
                </a>

                <ul className='hidden md:flex text-black gap-8 text- [100px]'  >
                    
                    <li>
                        <a href="/"><b>Home</b></a>
                    </li>
                    <li>
                        <a href="/#recipes"><b>Explore</b></a>
                    </li>
                    
                </ul>

                <Button
                    title='Sign in'
                    conteinerStyle='hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'
                />

                <button className='block md:hidden text-white text-xl'
                    onClick={() => setOpen(prev => !prev)}>
                    {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
                </button>
            </nav>
            <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[20px]`}>
                <a href="/">Home</a>
                
            </div>
        </header>
    )
}

export default Navbar