import { IoCloseSharp } from 'react-icons/io5'
import Link from 'next/link'

const MobileMenu = ({isOpen, toggle}) => {
  return (
      isOpen && (
    <ul className='flex-col flex items-center fixed inset-0 left-1/4 bg-white/95 gap-8 justify-center p-8 md:hidden'>
      <div className='absolute right-6 top-6 scale-150'>
        <IoCloseSharp onClick={toggle} />
      </div>
      <li><Link href='/#about' onClick={toggle}>About</Link></li>
      <li><Link href='/#gallery' onClick={toggle}>Gallery</Link></li>
      <li>Adventure</li>
      <li><Link href='/#contact' onClick={toggle}>Contact</Link></li>
      <li><Link href='/#blog' onClick={toggle}>Blog</Link></li>
      <li>Guide</li>
    </ul>
      )

  )
}

export default MobileMenu