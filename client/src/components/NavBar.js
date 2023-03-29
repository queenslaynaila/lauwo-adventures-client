import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
<<<<<<< HEAD
import MobileMenu from './MobileMenu'
=======
>>>>>>> 25521ec (build: desktop view navbar)

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <nav className='fixed w-full shadow-sm flex justify-between p-4 items-center'>
      <div className='flex items-center'>
        <Image src='/logo.png' width={50} height={50} alt='logo' />
      </div>
      <div className='absolute right-6 md:hidden top-6 scale-150'>
        <HiOutlineMenuAlt2 onClick={toggle} />
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <ul className='hidden md:flex gap-8 p-6 font-poly text-base tracking-wide font-semibold'>
=======
      <ul className='hidden md:flex gap-8 p-6 font-poly text-xl'>
>>>>>>> 25521ec (build: desktop view navbar)
=======
      <ul className='hidden md:flex gap-8 p-6 font-poly text-base tracking-wide font-semibold'>
>>>>>>> f67f672 (build: header)
        <li><Link href='/#about'>About</Link></li>
        <li><Link href='/#gallery'>Gallery</Link></li>
        <li><Link href='/'>Adventures</Link></li>
        <li><Link href='/#contact'>Contact</Link></li>
        <li><Link href='/#blog'>Blog</Link></li>
        <li><Link href='/'>Guide</Link></li>
        <div className='border-l-2 border-black'>
          <li><BiSearch className='ml-8 w-6 h-6' /></li>
        </div>
      </ul>
<<<<<<< HEAD
      <MobileMenu isOpen={isOpen} toggle={toggle} /> 
=======
      
>>>>>>> 25521ec (build: desktop view navbar)
    </nav>
  )
}

export default NavBar
