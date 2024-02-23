'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function navbar() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', updateIsDesktop);
    return () => window.removeEventListener('resize', updateIsDesktop);
  }, []);
  return (
    <nav className={isDesktop ? 'flex justify-center w-full h-16 !fixed top-0 sm:top-0 sm:left-0 sm:right-0 z-50 bg-white' : 'flex justify-center w-full h-16 !fixed bottom-0 z-50 bg-white'}>
      <div className='flex justify-between w-full max-w-screen  px-7  sm:rounded-b-xl sm:shadow-lg sm:px-10'>
        <Link href='/'>
          <Image src='/img/logo.png' width={60} height={60} alt='Antarctic logo' />
        </Link>

        <ul className='items-center gap-3 hidden sm:flex'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/'>Project</Link>
          </li>
          <li>
            <Link href='/'>Contact</Link>
          </li>
          
        </ul>
        <ul className='flex justify-between items-center gap-3 !fixed bottom-0 sm:hidden z-50 left-0 w-full bg-white rounded-t-xl shadow-lg py-3 px-7 border border-gray-400'>
          
          <li>
            <Link href='/' className='flex flex-col items-center'>
              <i className="ri-home-3-line"></i>
              <span className='text-sm'>Home</span>
            </Link>
          </li>
          <li>
            <Link href='/' className='flex flex-col items-center'>
              <i className="ri-code-box-line"></i>
              <span className='text-sm'>Project</span>
            </Link>
          </li>
          <li>
            <Link href='/' className='flex flex-col items-center'>
              <i className="ri-phone-fill"></i>
              <span className='text-sm'>Contact</span>
            </Link>
          </li>
          
        </ul>
        
      </div>
    </nav>
  )
}
