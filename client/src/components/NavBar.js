import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import MobileMenu from './MobileMenu'
import AdventuresDropDown from './AdventuresDropDown'
import GuideDropDown from './GuideDropDown'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 200) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    < nav className={isScrolled ? 'fixed w-full shadow-sm flex justify-between p-4 items-center text-white bg-black/50 z-10' : 'fixed w-full shadow-sm flex justify-between p-4 items-center text-white z-10'} >
      <div className='flex items-center'>
        <Image src='/logo.png' width={50} height={50} alt='logo' />
      </div>
      <div className='absolute right-6 md:hidden top-6 scale-150'>
        <HiOutlineMenuAlt2 onClick={toggle} />
      </div>
      <ul className='hidden md:flex gap-8 p-6 font-poly text-base tracking-wide font-semibold'>
        <li><Link href='/#about'>About</Link></li>
        <li><Link href='/#gallery'>Gallery</Link></li>
        <li><AdventuresDropDown setIsOpen={setIsOpen} /></li>
        <li><Link href='/#contact'>Contact</Link></li>
        <li><Link href='/#blog'>Blog</Link></li>
        <li><GuideDropDown setIsOpen={setIsOpen} /></li>
        <div className='border-l-2 border-white'>
          <li><BiSearch className='ml-8 w-6 h-6' /></li>
        </div>
      </ul>
      <MobileMenu isOpen={isOpen} toggle={toggle} /> 
    </nav>
  )
}

export default NavBar