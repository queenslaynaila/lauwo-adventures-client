import { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import Link from 'next/link'

const AdventuresDropDown = ({ setIsOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] =useState(false)
  return (
    <div className='relative flex flex-col items-center'>
        <button className='flex flex-row items-center justify-center'
        onClick = {() => setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen)}
        >Adventures
        {isDropdownOpen ? <AiOutlineCaretUp className='ml-1'/> : <AiOutlineCaretDown className='ml-1'/>}
        </button>
        <div className={`absolute top-10 bg-white text-black text-center w-52 h-64 flex flex-col items-center justify-center capitalize rounded-sm shadow-lg font-light ${isDropdownOpen ? 'block' : 'hidden'}`}>
            <Link href='/mountaintrekking'onClick={() => {
              setIsDropdownOpen(false)
              setIsOpen(false)
              }}>mountain trekking</Link>
            <hr className='w-3/4 my-2'/>
            <Link href='/safaris' onClick={() => {
              setIsDropdownOpen(false)
              setIsOpen(false)
              }}>safaris</Link>
            <hr className='w-3/4 my-2'/>
            <Link href='/culturaltours' onClick={() => {
              setIsDropdownOpen(false)
              setIsOpen(false)
              }}>cultural tours</Link>
              <hr className='w-3/4 my-2'/>
              <Link href='/cyclingtours' onClick={() => {
              setIsDropdownOpen(false)
              setIsOpen(false)
              }}>cycling tours</Link>
              <hr className='w-3/4 my-2'/>
              <Link href='/daytrips' onClick={() => {
              setIsDropdownOpen(false)
              setIsOpen(false)
              }}>day trips</Link>
        </div>
    </div>
  )
}

export default AdventuresDropDown 

