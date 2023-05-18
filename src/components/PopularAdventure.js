import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const cardData = [
  {
    id: 1,
    title: 'Experience Africas Majestic Peak With Our Kilimanjaro Climb',
    image: '/kilimanjaro.webp',
    link: '/mountain-trekking/mount-kilimanjaro',
  },
  {
    id: 2,
    title: 'Are you a Solo Traveller ? Join A  Group Climb',
    image: '/climbers.webp',
    link: '/kilimanjaro-group-climb',
  },
  {
    id: 3,
    title: ' Gettin Started on Your First Climb ? Plan Your Climb With Lauwo',
    image: '/kilimanjarosunset.webp',
    link: '/planing',
  },
  {
    id: 4,
    title: 'Planning to Go On a Safari Check Our Top Safari Locations',
    image: '/background.webp',
    link: '/safari-locations',
  },
  {
    id: 5,
    title:
      'Safari Packages To get You Started on Your Tanzanian Safari Adventure',
    image: '/safari-1.webp',
    link: '/our-safari-packages',
  },
  {
    id: 6,
    title: 'Getting Started on Your First Safari ? Plan Your Safari With Lauwo',
    image: '/lauwoteam.jpeg',
    link: '/planning-a-safari',
  },
  {
    id: 7,
    title: 'Travel Tips With Luawo To get You Started And Prepared',
    image: '/tanzania.webp',
    link: '/travelconsideration',
  },
  {
    id: 8,
    title: 'Experience Tanzania In A Day With Our Day Trips',
    image: '/kikuletwahostsprings.webp',
    link: '/day-trips',
  },
  {
    id: 9,
    title: 'Learn More About Local Culture With Our Cultural Tours',
    image: '/maasai.webp',
    link: '/cultural-tours',
  },
];

const Card = ({ title, image }) => {
  return (
    <div className="p-4">
      <div className="relative bg-white border border-gray-200 rounded-lg shadow">
        <Image
          src={image}
          alt="/"
          width={800}
          height={600}
          className="h-64 w-full object-cover rounded-t-lg"
        />
        <div className="p-5 hover:bg-yellow-500">
          <h2 className="mb-2 sm:text-lg font-bold font-poly tracking-wide text-gray-900 capitalize">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

const PopularAdventure = () => {
  const [activeGrid, setActiveGrid] = useState(1);
  const grids = Math.ceil(cardData.length / 3);

  const handleGridChange = (gridIndex) => {
    setActiveGrid(gridIndex);
  };

  const getCardsForGrid = () => {
    const startIndex = (activeGrid - 1) * 3;
    const endIndex = startIndex + 3;
    return cardData.slice(startIndex, endIndex);
  };

  return (
    <section className="py-8 font-poly">
      <div className="mx-50">
        <div className="flex justify-center items-center">
          <div className="border-t border-black w-1/3"></div>
          <div className="text-center mx-2">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="3em"
              width="3em"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              />
              <path d="M350.67 150.93l-117.2 46.88a64 64 0 00-35.66 35.66l-46.88 117.2a8 8 0 0010.4 10.4l117.2-46.88a64 64 0 0035.66-35.66l46.88-117.2a8 8 0 00-10.4-10.4zM256 280a24 24 0 1124-24 24 24 0 01-24 24z" />
            </svg>
          </div>
          <div className="border-t border-black w-1/3"></div>
        </div>
      </div>
      <h2 className="text-center text-3xl font-bold mb-4">
        Come Experience Tanzania with Us
      </h2>
      <div className="flex flex-col items-center">
        <div className="card-grid-container grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4">
          {getCardsForGrid().map((card) => (
            <Link href={`${card.link}`} key={card.id}>
              <Card title={card.title} image={card.image} />
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          {Array.from({ length: grids }, (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 ${
                index + 1 === activeGrid ? 'bg-yellow-500' : 'bg-gray-500'
              }`}
              onClick={() => handleGridChange(index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularAdventure;
