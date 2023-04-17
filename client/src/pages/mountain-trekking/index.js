import { useState } from 'react';
import { useRouter } from 'next/router';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { generateSlug } from '@/utils/generateSlug';


export default function index({mountains}) {
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handlePrevClick = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? mountains.length - 1 : prevIndex - 1));
    }
    const handleNextClick = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === mountains.length - 1 ? 0 : prevIndex + 1));
    };
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center relative font-poly">
    {mountains.map((mountain, index) => (
      <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(${mountain.image_url})`,
            opacity: currentImageIndex === index ? 1 : 0,
            display: currentImageIndex === index ? "block" : "none"
          }}
        >
        <div className="bg-black/50 h-full flex flex-col justify-center items-center">
          <h1 className="font-poppins font-extrabold text-white text-4xl md:text-7xl mx-4 hover:text-yellow-500">
            {mountain.mountain_name}
          </h1>
          <p className="text-white my-8 mx-8 md:mx-16 text-center font-medium text-xl md:text-2xl leading-7 tracking-tighter">
            {mountain.description}
          </p>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-xl font-medium text-white focus:outline-none hover:bg-white rounded-full border border-gray-200 hover:text-yellow-500 focus:z-10"
            onClick={() => {
              const slug = generateSlug(mountain.mountain_name);
              router.push(`/mountain-trekking/${slug}`);
            }}
          >
            Discover More
          </button>
        </div>
      </div>
    ))}
  
    <div className="absolute left-0 right-0 flex justify-center mb-8">
      <BsArrowLeft
        className="text-white text-2xl cursor-pointer absolute top-0 left-4 md:left-8 z-30 "
        onClick={handlePrevClick}
      />
      <BsArrowRight
        className="text-white text-2xl cursor-pointer absolute top-0 right-4 md:right-8 z-30 "
        onClick={handleNextClick}
      />
    </div>
  
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <div className="flex">
        {mountains.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mr-3 ${
              index === currentImageIndex ? "bg-yellow-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  </div>
  
  )
}
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/mountains');
    const mountains = await res.json();
    return {
      props: { mountains },
    };
  }