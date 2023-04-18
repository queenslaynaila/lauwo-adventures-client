import Image from 'next/image';
import Link from 'next/link';
import { generateSlug } from '@/utils/generateSlug';
 
export default function index({mountain}) {
   
  return (
     <div  className='font-poly'>
        <header className="w-full h-64  bg-[url('/kilimanjaro.jpg')] bg-cover bg-center flex justify-center items-center">
              <h1 className='text-4xl mt-8 text-white  text-center font-bold w-8/12 sm:w-6/12 leading-[50px]'>{mountain.mountain_name}</h1>
        </header>

        <div className="p-4 mb-4">
          <p className="mx-8 my-8">{mountain.overview}</p>
          <div className="flex justify-center items-center">
              <div className="border-t-2 border-black w-full"></div>
                  <div className='mx-4 inline'>
                      <Image  src="/peakfinder.png" alt='nnn' height={50} width={50} />
                      <span>ROUTES</span>
                   </div>
              <div className="border-t-2 border-black w-full"></div>
          </div>
        </div>

       <div class="flex flex-wrap">
          {mountain.routes.map((route)=>(
            <div class="w-full md:w-1/3 p-4">
            <div class="relative bg-white overflow-hidden shadow-lg group">
               <div>
                  <Image src={route.image_URL} alt="Mount Kilimanjaro" width={500} height={333} />
               </div>
             
              <div class="absolute bottom-0 bg-yellow-400 text-black p-2 w-full" style={{objectFit:"cover"}}>
                <h2 class="text-lg font-bold text-center">{route.route_name}</h2>
              </div>
              <div class="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <h2 class="text-lg font-bold text-black mb-4">{route.route_name}</h2>
                  <div class="space-y-2">
                  {route.durations.map((duration) => (
                    <Link   href={`/mountain-trekking/${generateSlug(mountain.mountain_name)}/${generateSlug(route.route_name)}-${duration}-days`}>
                    <button
                class="w-full mb-2  py-2 border border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400"
                key={duration}
              >
                {duration} days
              </button>
                    </Link>
             
            ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
        
       </div>
     
    </div>
  )
}

 
export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/mountains');
  const mountains = await res.json();
  const paths = mountains.map((mountain) => ({
    params: { mountain: generateSlug(mountain.mountain_name), id: mountain.id },
  }));
  console.log(paths)
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch('http://localhost:3000/mountains');
  const mountains = await res.json();
  const mountain = mountains.find(
    (mountain) => generateSlug(mountain.mountain_name) === params.mountain
  );
  return {
    props: { mountain },
  };
}
