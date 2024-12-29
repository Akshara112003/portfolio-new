import React from 'react';
import { FaLinkedin, FaBehance, FaInstagram , FaGithub, FaWhatsapp} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='px-6 md:px-0  mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700
    pt-4 flex justify-between items-center'>

        <h1 className='text-2xl font-vold'>Akshara T</h1>

        <div className='flex space-x-6 mt-4'>
            <a href="https://www.linkedin.com/in/akshara-t-174103313/" className='hover:text-gray-300'>
                <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Akshara112003" className='hover:text-gray-300'>
                <FaGithub size={24} />
            </a>
            <a href="https://www.instagram.com/aksh.ra_/profilecard/?igsh=amttdHJldDBwZ2Vu" className='hover:text-gray-300'>
                <FaInstagram size={24} />
            </a>
            <a href="https://www.behance.net/aksharat1" className='hover:text-gray-300'>
                <FaBehance size={24} />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B919787617194&text&type=phone_number&app_absent=0" className='hover:text-gray-300'>
                <FaWhatsapp size={24} />
            </a>
        </div>
      
    </div>
  )
}

export default Footer
