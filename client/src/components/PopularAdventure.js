import Image from 'next/image';
import {AiOutlineCompass } from 'react-icons/ai';
const PopularAdventure = () => {
  return (
    <section className='popular' >
       <div className='mx-100'>
         <div className="flex justify-center items-center">
             <div className="border-t border-black w-1/3"></div>
                <div className="text-center">
                    <AiOutlineCompass className='lg:text-8xl sm:text-2xl inline-block'/>
               </div>
             <div className="border-t border-black w-1/3"></div>
          </div>
        </div>
        <h1 className="lg:text-4xl sm:text-lg font-bold text-center lg:my-4 sm:my-2">Popular Expeditures</h1>
        <div className="grid grid-cols-3 gap-x-6 mx-10">

          <div >
              <div className="rounded-lg overflow-hidden mb-6 lg:h-96 sm:h-60">
                <Image src="/safari-1.jpg" alt='nnn' height={500} width={500} className="w-full h-full object-cover image" />
              </div>
               <h3 className="sm:text-sm lg:text-2xl font-bold mb-3">Serengeti</h3>
          </div>

          <div>
            <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6 lg:h-96 sm:h-60">
                <Image src="/kilimanjaro.jpg" alt='nnn'  priority={true} height={500} width={500} className="w-full h-full object-cover image" /> 
            </div>
            <h3 className="sm:text-sm lg:text-2xl  font-bold mb-3">Kilimanjaro</h3>
          </div>

          <div>
            <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6 lg:h-96 sm:h-60">
              <Image src="/tarangire.jpg" alt='nnn' height={500} width={500} className="w-full  h-full object-cover image"/>
            </div>
            <h3 className="sm:text-sm lg:text-2xl  font-bold mb-3">Tarangire</h3>
          </div>
        </div>
      </section>
  )
}

export default PopularAdventure
 
