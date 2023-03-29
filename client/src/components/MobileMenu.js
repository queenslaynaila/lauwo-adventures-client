import { IoCloseSharp } from 'react-icons/io5'
import Link from 'next/link'

const MobileMenu = ({isOpen, toggle}) => {
  return (
    <ul className={isOpen ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
      <div className='absolute right-6 top-6 scale-150'>
        <IoCloseSharp onClick={toggle} />
      </div>
      <li><Link href='/#about'>About</Link></li>
      <li><Link href='/#gallery'>Gallery</Link></li>
      <li><Link href='/'>Adventures</Link></li>
      <li><Link href='/#contact'>Contact</Link></li>
      <li><Link href='/#blog'>Blog</Link></li>
      <li><Link href='/'>Guide</Link></li>
    </ul>

  )
}

export default MobileMenu