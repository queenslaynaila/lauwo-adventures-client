import React, { useState } from 'react';
import { AiOutlineCompass } from 'react-icons/ai';
import Image from 'next/image';
const cardData = [
  {
    id: 1,
    title: 'Experince Africas Majestic Peak With Our Kilimanjaro Climb',
    image: '/kilimanjaro.jpg',
    link: '/mountain-trekking/mount-kilimanjaro',
  },
  {
    id: 2,
    title: 'Are you a Solo Traveller ? Join A  Group Climb',
    image: '/climbers.jpg',
    link: '/kilimanjaro-group-climb',
  },
  {
    id: 3,
    title: ' Gettin Started on Your First Climb ? Plan Your Climb With Lauwo',
    image: '/kilimanjarosunset.jpg',
    link: '/planing',
  },
  {
    id: 1,
    title: 'Planning to Go On a Safari Check Our Top Safari Locations',
    image: '/background.jpg',
    link: '/safari-locations',
  },
  {
    id: 2,
    title:
      'Safari Packages To get You Started on Your Tanzanian Safari Adventure',
    image: '/safari-1.jpg',
    link: '/our-safari-packages',
  },
  {
    id: 3,
    title: 'Getting Started on Your First Safari ? Plan Your Safari With Lauwo',
    image: '/lauwoteam.jpeg',
    link: '/planning-a-safari',
  },
  {
    id: 1,
    title: 'Travel Tips With Luawo To get You Started And Prepared',
    image: '/tanzania.jpg',
    link: '/travelconsideration',
  },
  {
    id: 2,
    title: 'Experience Tanzania In A Day With Our Day Trips',
    image: '/kikuletwahostsprings.jpg',
    link: '/day-trips',
  },
  {
    id: 3,
    title: 'Learn More About Local Culture With Our Cultural Tours',
    image: '/maasai.jpg',
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

  const handlePrevGrid = () => {
    if (activeGrid > 1) {
      setActiveGrid(activeGrid - 1);
    }
  };

  const handleNextGrid = () => {
    if (activeGrid < grids) {
      setActiveGrid(activeGrid + 1);
    }
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
          <div className="text-center">
            <AiOutlineCompass className="lg:text-5xl sm:text-2xl inline-block mx-2" />
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
            <a href={`${card.link}`} key={card.id}>
              <Card title={card.title} image={card.image} />
            </a>
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
      {activeGrid > 1 && (
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-yellow-500 text-2xl focus:outline-none"
          onClick={handlePrevGrid}
        >
          &lt;
        </button>
      )}
      {activeGrid < grids && (
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-yellow-500 text-2xl focus:outline-none"
          onClick={handleNextGrid}
        >
          &gt;
        </button>
      )}
    </section>
  );
};

export default PopularAdventure;
