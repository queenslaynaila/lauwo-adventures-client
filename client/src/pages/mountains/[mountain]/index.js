import Image from 'next/image';
 
import { useRouter } from 'next/router';
export default function index({mountain}) {
   const router = useRouter()

   console.log(router)

  return (
     <div  className='font-poly'>
       <header
        className="w-full h-64  bg-[url('/kilimanjaro.jpg')] bg-cover bg-center flex justify-center items-center">
            <h1 className='text-4xl mt-8 text-white  text-center font-bold w-8/12 sm:w-6/12 leading-[50px]'>Kilimanjaro</h1>
      </header>
      <div className="p-4 mb-4">
         <p className="mx-8 my-8">Climb Mount Kilimanjaro with Lauwo adventures, a trusted local trekking tour operator. We offer hikes on the Lemosho route, Machame route, Marangu route,  Rongai route and Umbwe route ranging from 5 to 8 days.</p>
         <div className="flex justify-center items-center">
            <div className="border-t-2 border-black w-full"></div>
                <div className='mx-4 inline'>
                    <Image  src="/peakfinder.png" alt='nnn' height={50} width={50} />
                    <span>ROUTES</span>
               </div>
             <div className="border-t-2 border-black w-full"></div>
         </div>
         <div class="flex flex-wrap justify-center">
  <div class="w-full md:w-1/3 p-4">
    <div class="relative bg-white overflow-hidden shadow-lg group">
      <Image src="/kilimanjaro.jpg" alt="Mount Kilimanjaro" width={500} height={333} />
      <div class="absolute bottom-0 bg-yellow-400 text-black p-2 w-full">
        <h2 class="text-lg font-bold text-center">Mount Kilimanjaro</h2>
      </div>
      <div class="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h2 class="text-lg font-bold text-black mb-4">Mount Kilimanjaro</h2>
          <div class="space-y-2">
            <button class="w-full py-2 border border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400">6 days</button>
            <button class="w-full py-2 border border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400">7 days</button>
            <button class="w-full py-2 border border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400">8 days</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <div class="w-full md:w-1/3 p-4">
    <div class="relative bg-white overflow-hidden shadow-lg group">
      <Image src="/kilimanjaro.jpg" alt="Mount Kilimanjaro" width={500} height={333} />
      <div class="absolute bottom-0 bg-yellow-400 text-black p-2 w-full">
        <h2 class="text-lg font-bold text-center">Mount Kilimanjaro</h2>
      </div>
      <div class="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h2 class="text-lg font-bold text-black mb-4">Mount Kilimanjaro</h2>
          <div class="space-y-2">
            <button class="w-full py-2 border border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400">6 days</button>
            <button class="w-full py-2 border border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400">7 days</button>
            <button class="w-full py-2 border border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400">8 days</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <div class="w-full md:w-1/3 p-4">
    <div class="relative bg-white overflow-hidden shadow-lg group">
      <Image src="/kilimanjaro.jpg" alt="Mount Kilimanjaro" width={500} height={333} />
      <div class="absolute bottom-0 bg-yellow-400 text-black p-2 w-full">
        <h2 class="text-lg font-bold text-center">Mount Kilimanjaro</h2>
      </div>
      <div class="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h2 class="text-lg font-bold text-black mb-4">Mount Kilimanjaro</h2>
          <div class="space-y-2">
            <button class="w-full py-2 border border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400">6 days</button>
            <button class="w-full py-2 border border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400">7 days</button>
            <button class="w-full py-2 border border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400">8 days</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
 
</div>






      </div>
       
    </div>
  )
}

 

