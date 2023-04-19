 
import Image from 'next/image'
export default function RouteCard({route,duration}) {
    console.log(duration)
  return (
     
      <div className='bg-sand font-poly'>
      <div className="flex items-center justify-center">
           <Image src="/peakfinder.png" alt='nnn' height={50} width={50} className='mr-2' />
           <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl text-xl capitalize text-center text-black py-32 ">{route.route_name} | {duration} Days </h3>
      </div>
      <div class="flex flex-col items-center px-8 -mt-24">
        <div class="flex relative flex-col md:flex-row md:items-center mb-28">
          <div class="md:w-1/2">
              <img src={route.image_URL} alt="Route" class="rounded-lg mb-4 h-96 object-cover object-center" />
          </div>
          <div class="md:w-1/2 md:ml-8">
                <p class="mb-4 text-lg leading-6">{route.description}</p>
                <div class="text-center h-24">
                  <button class="mt-auto bg-yellow-400 text-black py-2 px-4 md:w-1/5">
                    Book Slot
                  </button>
                </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}
