import { AiOutlineCompass } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
const PopularAdventure = () => {
  const services = [
    {
      title: 'Climbing Expeditions',
      description:
        'Embark on a challenging and rewarding journey to conquer the majestic peaks of Tanzania.Conquer majestic Tanzania peaks on a challenging   journey',
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
      title: 'Day Trips & Cultural Tours',
      description:
        'Experience the breathtaking beauty of Tanzania through captivating day trips and cultural discoveries.',
      image: '/daytrip.jpg',
      url: '/daytrip-packages',
    }
  ];
  return (
    <>
      <section className=" py-12 font-poly lg:mt-0 mt-96">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section className="bg-gray-100 font-poly">
        <div className="container mx-auto py-12 ">
          <h2 className="text-3xl font-bold text-center mb-8">Why Book with Lauwo Adventures?</h2>
          <div className="grid ms:grid-cols-3 grid-cols-1 gap-8">
            <div className="flex flex-col items-center">
              <Image src="/trip.png" alt="Tailor Made Tours" className="w-20 h-20 mb-4 bg-gray-100" height={80} width={80} />
              <p className="text-center">Tailor Made Tours</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/itinerary.png" alt="Custom Itineraries" className="w-20 h-20 mb-4 bg-gray-100"  height={80} width={80}/>
              <p className="text-center">Custom Itineraries</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/advise.png" alt="24/7 Expert Advice" className="w-20 h-20 mb-4 bg-gray-100"  height={80} width={80} />
              <p className="text-center">24/7 Expert Advice</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/guide.png" alt="Experienced Guides" className="w-20 h-20 mb-4 bg-gray-100" height={80} width={80} />
              <p className="text-center">Experienced Guides</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/authentic.png" alt="Authentic Experiences" className="w-20 h-20 mb-4 bg-gray-100"  height={80} width={80}/>
              <p className="text-center">Authentic Experiences</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/customer.png" alt="Customer Satisfaction" className="w-20 h-20 mb-4 bg-gray-100"   height={80} width={80} />
              <p className="text-center">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularAdventure;
