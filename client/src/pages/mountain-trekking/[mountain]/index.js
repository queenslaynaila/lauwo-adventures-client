import Image from 'next/image';
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
    </div>
  )
}

 
export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/mountains');
  const mountains = await res.json();
  const paths = mountains.map((mountain) => ({
    params: { mountain: generateSlug(mountain.mountain_name), id: mountain.id },
  }));
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
