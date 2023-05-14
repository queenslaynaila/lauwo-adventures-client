import 'reactjs-popup/dist/index.css';

import Image from 'next/image';

export default function RouteCard({ route }) {
  return (
    <div className=" font-poly ">
      <div className="flex items-center justify-center">
        <Image
          src="/peakfinder.png"
          alt="nnn"
          height={50}
          width={50}
          className="mr-2"
        />
        <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl text-xl capitalize text-center text-black py-32 ">
          {route.route_name}
        </h3>
      </div>
      <div className="flex flex-col items-center px-8 ">
        <div className="flex relative flex-col md:flex-row md:items-center mb-28">
          <div className="md:w-1/2">
            <Image
              src={route.image_URL}
              alt="Route"
              className="rounded-lg mb-4 h-96 object-cover object-center"
              height={500}
              width={500}
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <p className="mb-4 text-lg leading-6">{route.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
