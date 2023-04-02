import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import MobileMenu from './MobileMenu'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  // on scroll add background to navbar
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    < nav className={navbar ? 'fixed w-full shadow-sm flex justify-between p-4 items-center text-white bg-black/50' : 'fixed w-full shadow-sm flex justify-between p-4 items-center text-white'} >
      <div className='flex items-center'>
        <Image src='/logo.png' width={50} height={50} alt='logo' />
      </div>
      <div className='absolute right-6 md:hidden top-6 scale-150'>
        <HiOutlineMenuAlt2 onClick={toggle} />
      </div>
      <ul className='hidden md:flex gap-8 p-6 font-poly text-base tracking-wide font-semibold'>
        <li><Link href='/#about'>About</Link></li>
        <li><Link href='/#gallery'>Gallery</Link></li>
        <li><Link href='/'>Adventures</Link></li>
        <li><Link href='/#contact'>Contact</Link></li>
        <li><Link href='/#blog'>Blog</Link></li>
        <li><Link href='/'>Guide</Link></li>
        <div className='border-l-2 border-white'>
          <li><BiSearch className='ml-8 w-6 h-6' /></li>
        </div>
      </ul>
      <MobileMenu isOpen={isOpen} toggle={toggle} /> 
    </nav>
  )
}

export default NavBar
