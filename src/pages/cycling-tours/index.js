import CyclingCard from '@/components/CyclingCard';
import SocialsButtons from '@/components/SocialsButtons';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EnquiryPopUp from '@/components/enquirypopup';
const images = [
  {
    src: '/pawan.jpg',
  },
  {
    src: '/sinya.jpg',
  },

  {
    src: '/shira.jpg',
  },
];

function Tours({ tours }) {
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
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
    <div className="font-poly">
      <div
        className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: "url('/sinya.jpg')" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
          }}
        ></div>
        <div className="relative container mx-auto p-4 mt-8">
          <div className="py-10 px-5 my-5 text-white">
            <div className="mb-3 text-2xl md:text-4xl">
              West Kilimanjaro Cycling Tours
            </div>
            <div className="leading-normal">
              Discover the richness of Tanzania&apos;s experiences through our
              curated tours.
            </div>
          </div>
          <div className="cta clear-left px-5">
            <div className="flex">
              <Link
                className="no-underline mr-2 btn btn-outline-primary block sm:inline-block global-transition text-white"
                href="/travelconsideration"
              >
                <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                  <span className="mr-2">Plan A Tanzanian Visit </span>
                  <span className="fa fa-arrow-right"></span>
                </button>
              </Link>
              <Link
                className="no-underline btn btn-outline-primary block sm:inline-block global-transition text-white"
                href="/planning-form"
              >
                <button className="text-white border border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-md px-4 py-2 flex items-center">
                  <span className="mr-2">Tailor Your Trip</span>
                  <span className="fa fa-arrow-right"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 bg-yellow-500 flex items-center justify-between">
        <p className="text-white lg:ml-12">
          Discover the richness of Tanzania&apos;s culture .
        </p>
        <div>
          <Popup
            trigger={
              <button className="text-white border  border-white-500 hover:bg-yellow-800 hover:text-white rounded-md px-4 py-2">
                Enquire
              </button>
            }
            modal
            nested
            closeOnDocumentClick
            contentStyle={contentStyle}
          >
            {(close) => (
              <div className="modal">
                <button className="close " onClick={close}>
                  &times;
                </button>
                <EnquiryPopUp />
              </div>
            )}
          </Popup>
        </div>
      </div>
      <div>
        <h1 className="text-center p-4 text-2xl font-bold">West Kilimanjaro</h1>
        <div className="flex flex-wrap justify-center mx-4 lg:mx-16">
          <div className="w-full md:w-1/2 p-4">
            <div>
              {images.map((image, index) => (
                <Image
                  key={index}
                  height={800}
                  width={500}
                  alt="ff"
                  src={image.src}
                  className="rounded-lg"
                  style={{
                    display: currentImageIndex === index ? 'block' : 'none',
                  }}
                ></Image>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <p className="mb-4">
              The region comprises of acacia woodland and open plains that
              support a remarkable variety of wildlife and spectacular views of
              Mt. Kilimanjaro. The most common animals in the area include
              wildebeest, zebra, gazelles, impalas, giraffes and baboons.
              Depending on the time of year, elephants are a very common sight
              given the region lies along an elephant corridor linking Kenya’s
              Amboseli National Park & Mt. Kilimanjaro. This region is home to
              the nomadic Maasai herdsmen who co-exist with the surrounding
              wildlife hence the term Maasai Land. Given the rich culture of the
              Maasai people and the variety of wildlife, a cycling tour in this
              area is ideal for those discerning travelers looking for an
              unforgettable off-the-beaten-path adventure experience comprising
              of walking, photography, culture and scenery.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">Our Tours </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
        {tours.map((tour) => (
          <div key={tour.id}>
            <CyclingCard tour={tour} />
          </div>
        ))}
      </div>

      <SocialsButtons />
    </div>
  );
}

export default Tours;

export async function getStaticProps() {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/cycling_tours'
  );
  const tours = await res.json();
  return {
    props: { tours },
  };
}
