import { IoCloseSharp } from 'react-icons/io5'
import Link from 'next/link'
import AdventuresDropDown from './AdventuresDropDown'
import GuideDropDown from './GuideDropDown'

const MobileMenu = ({isOpen, toggle}) => {
  return (
      isOpen && (
    <ul className='flex-col flex items-center fixed inset-0 left-1/4 bg-white gap-12 justify-center p-8 md:hidden text-black'>
      <div className='absolute right-6 top-6 scale-150'>
        <IoCloseSharp onClick={toggle} />
      </div>
      <li><GuideDropDown/></li>
      <li><Link href='/#about' onClick={toggle}>About</Link></li>
      <li><Link href='/#gallery' onClick={toggle}>Gallery</Link></li>
      <li><AdventuresDropDown /></li>
      <li><Link href='/#contact' onClick={toggle}>Contact</Link></li>
      <li><Link href='/#blog' onClick={toggle}>Blog</Link></li>
    </ul>
      )

  )
}

export default MobileMenu