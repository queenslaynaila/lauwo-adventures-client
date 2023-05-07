import { generateSlug } from '@/utils/generateSlug';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Safaris = ({ safaris }) => {
  return (
    <>
      <Head>
        <title>Safaris -Lauwo Adventures</title>
        <meta
          name="description"
          content="Discover amazing safari tours with Lauwo Adventures. Book your next adventure today!"
        />
      </Head>

      <div
        className="h-full bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url(/serengeti.jpg)' }}
      >
        <div className="h-full w-full bg-black bg-opacity-80">
          <div className="flex flex-col items-center justify-center h-full w-full ">
            <h1 className="text-4xl text-white font-bold sr-only">Safaris</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24 mb-12 p-4">
              {safaris.map((safari) => (
                <Link
                  className="p-4"
                  key={safari.id}
                  href={`/safaris/${generateSlug(safari.name)}`}
                >
                  <div
                    className="border-2 border-white relative shadow-lg
              hover:scale-95 transform transition duration-500 ease-in-out
              "
                  >
                    <Image
                      width={300}
                      height={200}
                      className="w-full h-64"
                      src={safari.image_url}
                      alt={safari.name}
                    />
                    <div className="bg-black opacity-40 absolute inset-0"></div>
                    <div className="p-4 w-full h-full text-white  flex justify-center items-center absolute top-6">
                      <h3 className="text-md font-bold uppercase font-poly z-3 text-center">
                        {safari.name}
                      </h3>
                      
                    </div>
                    <div className="absolute bottom-0 px-1 left-0  bg-yellow-300">
                     <div className="text-lg font-medium text-black">
                        From ${safari.budget_price}
                     </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Safaris;

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/safaris');
  const safaris = await res.json();

  return {
    props: {
      safaris,
    },
  };
}
