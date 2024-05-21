import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button"
import Logo from '../images/forkifylogo.png'
const Footer = () => {
    return (
        <footer className="text-white py-20 bg-white opacity-90 ">
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <a href="/" className='flex items-center justify-center text-black text-lg cursor-pointer'>
                    <img src={Logo} alt="Logo" className='hidden md:block ' width = '300px'/>
                    
                </a>
                </div>

                <div className="">
                    <p>QUICK LINKS</p>

                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-black-500 text-black'
                        >
                            Home
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500 text-black'
                        >
                            About
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500 text-black'
                        >
                            Services
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500 text-black'
                        >
                            Contact
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500 text-black'
                        >
                            Chiefs
                        </a>
                    </div>
                </div>

                <div>
                    <p>LEGAL</p>
                    <div className='flex flex-col text-start mb-4 md:mb-0 text-[14px]'>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500 text-black'
                        >
                            Terms and Conditions
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500 text-black'
                        >
                            License Agreement
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500 text-black'
                        >
                            Privacy Policy
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500 text-black'
                        >
                            Copyright Information
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500 text-black'
                        >
                            Cookies Policy
                        </a>
                    </div>
                </div>

                <div className="flex flex-col text-black">
                    <p>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        <a
                            href='#'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaFacebook size={18} />
                        </a>

                        <a
                            href='#'
                            className='bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href='#'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href='#'
                            className='bg-red-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaYoutube size={18} />
                        </a>
                    </div>

                    <Button
                        title='Sign up'
                        btnType='button'
                        conteinerStyle='mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px]'
                    />
                </div>
            </div>

            <div className="flex items-center justify-center py-10 text-black">
                <p>
Made By Group 3

                </p>
                
            </div>
<div className="flex items-center justify-center  text-black">
                <p>
Jinny Kapur | Jiya Gaba | Kashika | Jashanjit Kaur
                </p>
                </div>





        </footer>
    )
    
}

export default Footer