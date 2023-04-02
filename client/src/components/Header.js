import { IoIosArrowDropdownCircle } from 'react-icons/io'
import Link from 'next/link'


const Header = () => {
  return (
    <header className="h-screen bg-cover bg-image bg-center bg-no-repeat flex flex-col bg-fixed w-full"
    style={{ backgroundImage: 'url(/mountain.jpg)' }}>
        <div className='flex flex-col justify-center items-center gap-4 sm:mt-56 mt-36'>
          <h1 className='text-4xl font-poly font-bold w-8/12 sm:w-6/12 leading-[50px]'>Experience the adventure of a lifetime</h1>
          <p className='font-poly w-8/12 sm:w-6/12'>As a third-generation family owned tour company run by locals, Lauwo Adventure offers authentic Tanzanian experiences ranging from beautiful summits atop the Kilimanjaro to local vibrant cultures and the vast Savannah plain fields in the Serengeti.
          </p>
        </div>
        <div className='flex flex-col items-center gap-4 mt-12'>
          <Link href="/#about">
            <IoIosArrowDropdownCircle className='text-yellow-500 text-4xl animate-bounce' />
          </Link>
        </div>
    </header>
  )
}

export default Header