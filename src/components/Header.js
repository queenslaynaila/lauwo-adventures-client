import { useState, useEffect } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import Link from 'next/link';

const images = [
  '/safari.jpg',
  '/ol-doinyo-lengai-1389118.jpg',
  '/kilimanjaro.jpg',
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % images.length
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <header
      className="h-screen bg-cover bg-image bg-center bg-no-repeat flex flex-col bg-fixed w-full  transition-opacity duration-1000 "
      style={{ backgroundImage: `url(${currentImage})`, opacity: 1 }}
    >
      <div className="bg-black/50 h-screen">
        <div className="flex flex-col justify-center items-center gap-4 sm:mt-56 mt-36 text-white">
          <h1 className="text-4xl font-poly font-bold w-8/12 sm:w-6/12 leading-[50px]">
            Experience the adventure of a lifetime
          </h1>
          <p className="font-poly w-8/12 sm:w-6/12">
            As a third-generation family owned tour company run by locals, Lauwo
            Adventure offers authentic Tanzanian experiences ranging from
            beautiful summits atop the Kilimanjaro to local vibrant cultures and
            the vast Savannah plain fields in the Serengeti.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 mt-4 font-poly">
          <Link href="planning-form">
            <button className="bg-yellow-500 hover:bg-yellow-800 text-white px-4 py-2 rounded-md">Plan A Trip</button>
          </Link>
          <Link href="#/contact">
            <button className="bg-yellow-500 hover:bg-yellow-800 text-white px-4 py-2 rounded-md">Enquire Now</button>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4 mt-16">
          <Link href="/#about">
            <IoIosArrowDropdownCircle className="text-yellow-500 text-4xl animate-bounce" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
