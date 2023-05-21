import { generateSlug } from '@/utils/generateSlug';
import Head from 'next/head';
import BookingForm from '@/components/BookingForm';
import MountainItinery from '@/components/MountainItinery';
import Packages from '@/components/Packages';
import Pricing from '@/components/Pricing';

import { useState } from 'react';
import SocialsButtons from '@/components/SocialsButtons';
const menuTabs = ['Itinerary', 'Standard', 'Premium', 'Pricing', 'Book', 'Map'];
const RouteSection = ({ route, duration, itineries, packages, mountain }) => {
  console.log(packages);
  const { standard_inclusive, standard_exclusive } = packages;
  const { premium_inclusive, premium_exclusive } = packages;
  const [activeTab, setActiveTab] = useState('Itinerary');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Head>
        <title>{`${route.route_name} | ${mountain.mountain_name}`}</title>
        <meta
          name="description"
          content={`Explore ${route.route_name} at ${mountain.mountain_name}.`}
        />
      </Head>
      <div className="font-poly ">
        <header
          className="h-[50vh] lg:h-[60vh] bg-cover bg-image bg-center bg-no-repeat flex items-center justify-center bg-gray-400 bg-blend-multiply"
          style={{
            backgroundImage: `url(${route.image_URL})`,
          }}
        >
          <div className="relative container p-4 mt-16">
            <div className="py-10 px-5 my-5 text-center">
              <div className="border-t-2 border-b-2 border-white my-3 pb-4 pt-2 md:text-4xl text-white text-4xl font-bold leading-[50px] mx-auto max-w-2xl uppercase">
                {route.route_name} {duration} days
              </div>
              <div className="text leading-normal text-white mx-auto max-w-2xl">
                PRIVATE TREKS AND GROUP CLIMBS
              </div>
            </div>
          </div>
        </header>
        <div
          className="  border-solid border-t-5 border-ad884a"
          style={{ borderTop: '5px solid #ad884a' }}
        ></div>

        <div className="py-5 px-5 my-5 text-center">
          <div className="border-t-2 border-b-2 border-white my-3 pb-4 pt-2 md:text-4xl text-black text-4xl font-bold leading-[50px] mx-auto max-w-2xl uppercase">
            {route.route_name} {duration} days
          </div>
          <div className="text leading-normal text-black mx-auto max-w-2xl flex flex-col lg:flex-row md:flex-row justify-between gap-11">
            <p>{packages.description}</p>
          </div>
        </div>
        <div>
          <ul className="pb-4 flex flex-wrap text-sm font-medium text-center gap-2 justify-center items-center text-gray-500   ">
            {menuTabs.map((tab) => (
              <li className="mr-2" key={tab}>
                <button
                  className={`inline-block p-4 rounded-lg ${
                    activeTab === tab
                      ? 'bg-yellow-700 text-white'
                      : 'hover:text-black hover:bg-gray-50 bg-yellow-500 text-white'
                  }`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div
          id={'Itinerary'}
          className={`tab-content ${activeTab === 'Itinerary' ? '' : 'hidden'}`}
        >
          <div>
            <h1 className="bg-white py-4 text-center text-3xl font-bold uppercase mt-2 ">
              Itinerary
            </h1>

            <div className="relative">
              <div
                className="vl absolute  border-l-2 border-black ml-[-3px] left-1/2 "
                style={{ height: '99%', top: '1%' }}
              ></div>
              {itineries.map((itinery, index) => (
                <MountainItinery
                  key={itinery.id}
                  index={index}
                  itinery={itinery}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          id={'Book'}
          className={`tab-content ${activeTab === 'Book' ? '' : 'hidden'}`}
        >
          <div>
            <BookingForm adventure={packages} bookableType={'RouteDuration'} />
          </div>
        </div>
        <div
          id={'Pricing'}
          className={`tab-content ${activeTab === 'Pricing' ? '' : 'hidden'}`}
        >
          <Pricing routeDuration={packages} />
        </div>
        <div
          id={'Standard'}
          className={`tab-content ${activeTab === 'Standard' ? '' : 'hidden'}`}
        >
          <Packages
            exclusive={standard_exclusive}
            inclusive={standard_inclusive}
            price={'STANDARD'}
          />
        </div>
        <div
          id={'Premium'}
          className={`tab-content ${activeTab === 'Premium' ? '' : 'hidden'}`}
        >
          <Packages
            exclusive={premium_exclusive}
            inclusive={premium_inclusive}
            price={'PREMIUM'}
          />
        </div>
        <SocialsButtons />
      </div>
    </>
  );
};

export default RouteSection;

export async function getStaticPaths() {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/mountains'
  );
  const mountains = await res.json();

  const allPaths = mountains.flatMap((mountain) =>
    mountain.routes.flatMap((route) =>
      route.durations.map((duration) => ({
        params: {
          mountain: generateSlug(mountain.mountain_name),
          route: generateSlug(route.route_name) + `-${duration}-days`,
        },
      }))
    )
  );

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { mountain, route } = params;
  const words = route.split('-');
  const routeName = words.slice(0, -2).join(' ');
  const duration = words.slice(-2, -1)[0];
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/mountains'
  );
  const mountains = await res.json();
  const mountainData = mountains.find(
    (mtn) => generateSlug(mtn.mountain_name) === mountain
  );
  const RouteData = mountainData.routes.find(
    (route) => route.route_name.toLowerCase() === routeName
  );
  const res2 = await fetch(
    'https://lauwo-adventures-api.onrender.com/route_durations'
  );
  const routeDurations = await res2.json();

  const routeDuration = routeDurations.find((routeDuration) => {
    return (
      routeDuration.duration_days === parseInt(duration) &&
      routeDuration.route_name === RouteData.route_name
    );
  });
  const { itineries, ...routeDetails } = routeDuration;
  return {
    props: {
      route: RouteData,
      itineries: itineries,
      packages: routeDetails,
      duration: duration,
      mountain: mountainData,
    },
  };
}
