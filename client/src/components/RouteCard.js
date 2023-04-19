 
import Image from 'next/image'
export default function RouteCard({route,duration}) {
    
  return (
     
      <div className='bg-sand font-poly'>
      <div className="flex items-center justify-center">
           <Image src="/peakfinder.png" alt='nnn' height={50} width={50} className='mr-2' />
           <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl text-xl capitalize text-center text-black py-32 ">{route.route_name} | {duration} Days </h3>
      </div>
      <div className="flex flex-col items-center px-8 -mt-24">
        <div className="flex relative flex-col md:flex-row md:items-center mb-28">
          <div className="md:w-1/2">
              <img src={route.image_URL} alt="Route" className="rounded-lg mb-4 h-96 object-cover object-center" />
          </div>
          <div className="md:w-1/2 md:ml-8">
                <p className="mb-4 text-lg leading-6">{route.description}</p>
                <div className="text-center h-24">
                  <button className="mt-auto bg-yellow-400 text-black py-2 px-4 md:w-1/5">
                    Book Slot
                  </button>
                </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}
