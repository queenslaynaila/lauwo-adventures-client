import { useState, useEffect } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import Link from 'next/link';

const images = [
  {
    src: '/test.webp',
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
      'Immerse yourself in the wonders of the African wilderness on our extraordinary wildlife safaris. Journey through vast savannahs, dense jungles, and untamed landscapes teeming with iconic wildlife. Witness herds of elephants roaming freely.........  ',
    ctaText: 'Safari Tours',
    ctaLink: '/our-safari-packages',
  },

  {
    src: '/gq.jpg',
    heading: 'Our Safari Locations',
    paragraph:
      "Indulge in the diversity of Tanzania's breathtaking safari locations. From the endless plains of the Serengeti to the wildlife-rich Ngorongoro Crater, each destination offers a unique and enchanting experience. Witness the annual wildebeest migration, spot the elusive Big Five..... ",
    ctaText: 'Safari Locations',
    ctaLink: '/safari-locations',
  },
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    // Function to change the current image after a delay
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
    // Set the interval to change the image every 3 seconds (adjust as needed)
    const interval = setInterval(changeImage, 5000);

    // Clean up the interval when the component is unmounted or the image list changes
    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <div className="h-screen relative  ">
      {images.map((image, index) => (
        <header
          key={index}
          className=" bg-cover bg-image bg-center bg-no-repeat flex flex-col bg-fixed w-full transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image.src})`,
            display: currentImageIndex === index ? 'block' : 'none',
          }}
        >
          <div className="bg-black/50 h-screen flex flex-col items-center justify-center font-poly">
            <div className="relative container p-4 mt-16 xs:p-2 lg:mt-32">
              <div className="py-10 xs:py-3 px-5 my-5 text-center">
                <div className="heading mb-3  md:text-4xl text-white text-4xl  font-bold  leading-[50px]">
                  {image.heading}
                </div>
                <div className="text leading-normal text-white mx-auto max-w-2xl">
                  {image.paragraph}
                </div>
              </div>
              <div className="cta clear-left px-5 text-center ">
                <div className="flex justify-center">
                  <Link
                    className="no-underline mr-2 btn btn-outline-primary block sm:inline-block global-transition text-white"
                    href={currentImage.ctaLink}
                  >
                    <button className="text-white bg-yellow-500 hover:bg-yellow-800 hover:text-white rounded-md  px-4 py-2 flex items-center">
                      <span className="mr-2">{image.ctaText}</span>
                      <span className="fa fa-arrow-right"></span>
                    </button>
                  </Link>
                  <Link
                    className="no-underline btn btn-outline-primary block sm:inline-block global-transition text-white"
                    href="/planning-form"
                  >
                    <button className="text-white bg-yellow-500 hover:bg-yellow-800 hover:text-white rounded-md items-center  px-4 py-2 flex ">
                      <span className="mr-2">Tailor Your Trip</span>
                      <span className="fa fa-arrow-right"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex md:flex flex-col items-center gap-4 mt-16 ">
              <Link href="/#about">
                <IoIosArrowDropdownCircle className="text-yellow-500 text-4xl animate-bounce" />
              </Link>
            </div>
          </div>
        </header>
      ))}

      <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
        <button onClick={handlePrevClick} className="mx-1">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-yellow-500  hover:bg-yellow-800 ">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6  "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0 ">
        <button onClick={handleNextClick} className="mx-1">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-yellow-500 hover:bg-yellow-800">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
