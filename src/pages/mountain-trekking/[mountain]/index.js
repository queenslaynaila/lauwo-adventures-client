import Image from 'next/image';
import Head from 'next/head';

import Link from 'next/link';
import { generateSlug } from '@/utils/generateSlug';
import { useRouter } from 'next/router';

export default function Mountain({ mountains }) {
  const router = useRouter();
  const path = router.query.mountain;
  const mountain = mountains.find(
    (mountain) => generateSlug(mountain.mountain_name) === path
  );

  return (
    <div className="font-poly">
      <Head>
        <title>{mountain.mountain_name} - Mountain Trekking</title>
        <meta name="description" content={mountain.overview} />
        <meta
          property="og:title"
          content={`${mountain.mountain_name} - Mountain Trekking`}
        />
        <meta property="og:description" content={mountain.overview} />
        <meta property="og:image" content={mountain.image_url} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://example.com/mountain-trekking/${generateSlug(
            mountain.mountain_name
          )}`}
        />
        <meta
          name="twitter:title"
          content={`${mountain.mountain_name} - Mountain Trekking`}
        />
        <meta name="twitter:description" content={mountain.overview} />
        <meta name="twitter:image" content={mountain.image_url} />
      </Head>
      <header
        className="w-full h-64  bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${mountain.image_url})` }}
      >
        <h1 className="text-4xl mt-8 text-white  text-center font-bold w-8/12 sm:w-6/12 leading-[50px] hover:text-yellow-500">
          {mountain.mountain_name}
        </h1>
      </header>

      <div className="p-4 mb-4">
        <p className="mx-8 my-8">{mountain.overview}</p>
        <div className="flex justify-center items-center">
          <div className="border-t-2 border-black w-full"></div>
          <div className="mx-4 inline">
            <Image src="/peakfinder.png" alt="nnn" height={50} width={50} />
            <span>ROUTES</span>
          </div>
          <div className="border-t-2 border-black w-full"></div>
        </div>
      </div>

      <div className="flex flex-wrap">
        {mountain.routes.map((route) => (
          <div className="w-full md:w-1/3 p-4" key={route.id}>
            <div className="relative bg-white overflow-hidden shadow-lg group">
              <div>
                <Image
                  src={route.image_URL}
                  alt="Mount Kilimanjaro"
                  width={500}
                  height={333}
                />
              </div>

              <div
                className="absolute bottom-0 bg-yellow-400 text-black p-2 w-full"
                style={{ objectFit: 'cover' }}
              >
                <h2 className="text-lg font-bold text-center">
                  {route.route_name}
                </h2>
              </div>
              <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h2 className="text-lg font-bold text-black mb-4">
                    {route.route_name}
                  </h2>
                  <div>
                    {route.durations.map((duration) => (
                      <Link
                        href={`/mountain-trekking/${generateSlug(
                          mountain.mountain_name
                        )}/${generateSlug(route.route_name)}-${duration}-days`}
                        key={duration}
                      >
                        <button
                          className="w-full mb-2 px-2  py-2 border border-black bg-yellow-400 text-black font-bold hover:bg-black hover:text-yellow-400"
                          key={duration}
                        >
                          {duration} days
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/mountains');
  const mountains = await res.json();

  return {
    props: {
      mountains,
    },
  };
}
