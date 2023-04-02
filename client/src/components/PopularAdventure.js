import Image from 'next/image';
import {AiOutlineCompass } from 'react-icons/ai';
const PopularAdventure = () => {
  return (
    <section className='popular font-poly mt-4 ' >
       <div className='mx-50'>
         <div className="flex justify-center items-center">
             <div className="border-t border-black w-1/3"></div>
                <div className="text-center">
                    <AiOutlineCompass className='lg:text-5xl sm:text-2xl inline-block'/>
               </div>
             <div className="border-t border-black w-1/3"></div>
          </div>
        </div>
        <h1 className="font-bold text-center my-2 text-lg lg:text-3xl">Popular Expeditures</h1>
        <div className="grid grid-cols-3 gap-x-6 mx-4 sm:mx-20 ">
            <div className=' rounded-lg h-32 sm:h-60 md:h-50 popularcont' > 
                <Image src="/safari-1.jpg" alt='nnn' height={500} width={500} className="w-full  h-full object-cover  rounded-lg"/> 
                <h3 className="sm:text-sm lg:text-2xl font-bold mb-3 des">Serengeti</h3>
            </div>

            <div className='rounded-lg h-32 sm:h-60 md:h-50 popularcont'>
                <Image src="/kilimanjaro.jpg" alt='nnn'  priority={true} height={500} width={500} className="w-full h-full object-cover  rounded-lg" />  
                <h3 className="sm:text-sm lg:text-2xl  font-bold mb-3 des">Kilimanjaro</h3>
            </div>

            <div className=' rounded-lg h-32 sm:h-60 md:h-50 popularcont'>
                <Image src="/tarangire.jpg" alt='nnn' height={500} width={500} className="w-full  h-full object-cover  rounded-lg"/> 
                <h3 className="sm:text-sm lg:text-2xl  font-bold mb-3 des">Tarangire</h3>
            </div>
        </div>
      </section>
  )
}

export default PopularAdventure
 
