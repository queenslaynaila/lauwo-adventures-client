import { useState, useEffect } from 'react';
// import { IoIosArrowDropdownCircle } from 'react-icons/io';
import Link from 'next/link';

const images = [
  {
    src: '/kilimanjarosunrise.jpg',
    heading: 'Climb Mount Kilimanjaro',
    paragraph:
      'Embark on an epic journey to the roof of Africa and conquer the majestic Kilimanjaro. Scale its towering peaks, traverse breathtaking landscapes, and challenge yourself to reach new heights. Our experienced guides will lead you through diverse ecosystems...',
    ctaText: 'Kilimanjaro Climbs',
    ctaLink: '/mountain-trekking/mount-kilimanjaro',
  },
  {
    src: '/background.jpg',
    heading: 'Safaris in Tanzania',
    paragraph:
      'Immerse yourself in the wonders of the African wilderness on our extraordinary wildlife safaris. Journey through vast savannahs, dense jungles, and untamed landscapes teeming with iconic wildlife. Witness herds of elephants roaming freely, spot majestic lions lazing under the African sun, and marvel at the grace of giraffes as they graze on treetops.  ',
    ctaText: 'Safari Tours',
    ctaLink: '/safari-packages',
  },

  {
    src: '/gq.jpg',
    heading: 'Our Safari Locations',
    paragraph:
      "Indulge in the diversity of Tanzania's breathtaking safari locations. From the endless plains of the Serengeti to the wildlife-rich Ngorongoro Crater, each destination offers a unique and enchanting experience. Witness the annual wildebeest migration, spot the elusive Big Five, and immerse yourself in the rich cultural heritage of local tribes. ",
    ctaText: 'Safari Locations',
    ctaLink: '/safari-locations',
  },
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
      className="h-screen bg-cover bg-image bg-center bg-no-repeat flex flex-col bg-fixed w-full transition-opacity duration-1000"
      style={{
        backgroundImage: `url(${currentImage.src})`,
      }}
    >
      <div className="bg-black/50 h-screen flex flex-col items-center justify-center font-poly">
        <div className="relative container p-4 mt-16 lg:mt-32">
          <div className="py-10 px-5 my-5 text-center">
            <div className="heading mb-3  md:text-4xl text-white text-4xl  font-bold  leading-[50px]">
              {currentImage.heading}
            </div>
            <div className="text leading-normal text-white mx-auto max-w-2xl">
              {currentImage.paragraph}
            </div>
          </div>
          <div className="cta clear-left px-5 text-center">
            <div className="flex justify-center">
              <Link
                className="no-underline mr-2 btn btn-outline-primary block sm:inline-block global-transition text-white"
                href={currentImage.ctaLink}
              >
                <button className="text-white bg-yellow-500 hover:bg-yellow-800 hover:text-white rounded-md px-4 py-2 flex items-center">
                  <span className="mr-2">{currentImage.ctaText}</span>
                  <span className="fa fa-arrow-right"></span>
                </button>
              </Link>
              <Link
                className="no-underline btn btn-outline-primary block sm:inline-block global-transition text-white"
                href="/planning-form"
              >
                <button className="text-white bg-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                  <span className="mr-2">Plan A Trip</span>
                  <span className="fa fa-arrow-right"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-16">
          <Link href="/#about">
            {/* <IoIosArrowDropdownCircle className="text-yellow-500 text-4xl animate-bounce" /> */}
            <svg
              fill="yellow"
              viewBox="0 0 16 16"
              height="2em"
              width="2em"
              className=" animate-bounce"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zM8.5 4.5a.5.5 0 00-1 0v5.793L5.354 8.146a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V4.5z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
