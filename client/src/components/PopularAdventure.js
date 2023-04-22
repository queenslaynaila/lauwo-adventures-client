import Image from 'next/image';
import { AiOutlineCompass } from 'react-icons/ai';
const PopularAdventure = () => {
  return (
    <section className="font-poly lg:mt-4 sm:-mt-24 mt-96 h-screen ">
      <div className="mx-50">
        <div className="flex justify-center items-center">
          <div className="border-t border-black w-1/3"></div>
          <div className="text-center">
            <AiOutlineCompass className="lg:text-5xl sm:text-2xl inline-block" />
          </div>
          <div className="border-t border-black w-1/3"></div>
        </div>
      </div>
      <h1 className="font-bold text-center my-2 text-lg lg:text-3xl">
        Popular Adventures
      </h1>
      <div className="grid grid-cols-3 sm:gap-x-6 gap-x-3 mx-4 sm:mx-20 mt-8">
        <div className=" rounded-lg h-32 sm:h-60 md:h-50">
          <Image
            src="/safari-1.jpg"
            alt="nnn"
            height={500}
            width={500}
            className="w-full  sm:h-[400px] h-[200px] object-cover  rounded-lg"
          />
          <h3 className="sm:text-sm lg:text-2xl font-bold mb-3 mt-4">
            Serengeti
          </h3>
        </div>

        <div className="rounded-lg sm:h-60 md:h-50">
          <Image
            src="/kilimanjaro.jpg"
            alt="nnn"
            priority={true}
            height={500}
            width={500}
            className="w-full sm:h-[400px] h-[200px]  object-cover  rounded-lg"
          />
          <h3 className="sm:text-sm lg:text-2xl  font-bold mb-3 mt-4">
            Kilimanjaro
          </h3>
        </div>

        <div className=" rounded-lg h-32 sm:h-60 md:h-50">
          <Image
            src="/tarangire.jpg"
            alt="nnn"
            height={500}
            width={500}
            className="w-full  sm:h-[400px] h-[200px]  object-cover  rounded-lg"
          />
          <h3 className="sm:text-sm lg:text-2xl  font-bold mb-3 mt-4">
            Tarangire
          </h3>
        </div>
      </div>
    </section>
  );
};

export default PopularAdventure;
