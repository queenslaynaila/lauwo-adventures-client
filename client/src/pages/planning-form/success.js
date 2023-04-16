import React from 'react'

export default function success() {
  return (
    <div  className='font-poly'>
      <header
        className=" h-screen bg-cover bg-image bg-center bg-no-repeat flex flex-col bg-fixed w-full  bg-[url('/safari.jpg')]  ">
          <div className="bg-black/50 h-screen">
          <div className='flex flex-col justify-center items-center gap-4 sm:mt-56 mt-36 text-white'>
            <h1 className='text-4xl font-poly font-bold w-8/12  text-center sm:w-6/12 leading-[50px]'>Congratulations</h1>
            <p className='font-poly w-8/12 sm:w-6/12 text-center'>You have taken the first step of your Tanzanian Adventure.You will hear from our team soon
            </p>
            
            
          </div>
        </div>
      </header>
    
    </div>
  )
}
