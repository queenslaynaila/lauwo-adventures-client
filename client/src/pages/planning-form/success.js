import React from 'react'
import Link from 'next/link'
export default function success() {
  return (
    <div className='font-poly'>
    <header className="h-screen bg-[#1a1a1a] bg-cover bg-center bg-no-repeat bg-fixed w-full bg-[url('/safari.jpg')]">
      <div className="bg-black/50 h-screen flex flex-col justify-center items-center">
        <h1 className='text-4xl font-poly font-bold w-8/12 sm:w-6/12 text-white text-center leading-[50px]'>Thank you for submitting your planning form</h1>
        <p className='font-poly w-8/12 sm:w-6/12 text-white text-center'>Our team will review your submission and get back to you shortly.Expect a mail and a Whatsapp message from us.</p>
        <div className="mt-8">
        <Link href="/">
          <button className="px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-gray-200">Return to homepage</button>
        </Link>
      </div>
      </div>
    </header>
  </div>
  
  )
}
