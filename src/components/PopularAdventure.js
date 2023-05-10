import { AiOutlineCompass } from 'react-icons/ai';
import Link from 'next/link';
const PopularAdventure = () => {
  const services = [
    {
      title: 'Climbing Expeditions',
      description:
        'Embark on a challenging and rewarding journey to conquer the majestic peaks of Tanzania.',
      image: '/kilimanjaro.jpg',
      url: '/mountain-trekking/mount-kilimanjaro',
    },
    {
      title: 'Safari Tours',
      description:
        'Experience the thrill of exploring Tanzania’s wildlife in their natural habitats with our expert guides.',
      image: '/safari.jpg',
      url: '/safari-packages',
    },
    {
      title: 'Day Trips',
      description:
        'Discover the beauty of Tanzania on our day trips to stunning locations and cultural landmarks.',
      image: '/daytrip.jpg',
      url: '/daytrip-packages',
    },
    {
      title: 'Cultural Tours',
      description:
        'Immerse yourself in the rich cultural heritage of Tanzania with our guided cultural tours.',
      image: '/culturaltour.jpg',
      url: '/culturaltour-packages',
    },
  ];
  return (
    <>
      <section className="bg-gray-100 py-12 font-poly lg:mt-4 mt-96">
        <div className="mx-50">
          <div className="flex justify-center items-center">
            <div className="border-t border-black w-1/3"></div>
            <div className="text-center">
              <AiOutlineCompass className="lg:text-5xl sm:text-2xl inline-block" />
            </div>
            <div className="border-t border-black w-1/3"></div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <h1 className="font-bold text-center my-4 text-lg lg:text-3xl">
            Come Experience Tanzania With Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.url}>
                <div className="bg-white rounded-lg shadow-md flex flex-col">
                  <div
                    className="h-64 w-full bg-cover rounded-t-lg mb-4"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 ">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularAdventure;
