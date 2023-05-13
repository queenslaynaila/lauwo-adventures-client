import { generateSlug } from '@/utils/generateSlug';
import Head from 'next/head';
import RouteCard from '@/components/RouteCard';
import MountainItinery from '@/components/MountainItinery';
import Packages from '@/components/Packages';
import Pricing from '@/components/Pricing';

const RouteSection = ({ route, duration, itineries, packages, mountain }) => {
  const bookableType = 'Mountain';
  return (
    <>
      <Head>
        <title>{`${route.route_name} | ${mountain.mountain_name}`}</title>
        <meta
          name="description"
          content={`Explore ${route.route_name} at ${mountain.mountain_name}.`}
        />
      </Head>
      <div className="font-poly mb-4">
        <RouteCard
          route={route}
          duration={duration}
          bookableType={bookableType}
          routeDuration={duration}
        />
        <div className="bg-white py-4 text-center text-3xl font-bold uppercase mt-2 ">
          itinerary
        </div>
        <div className="relative">
          <div
            className="vl absolute  border-l-2 border-black ml-[-3px] left-1/2 "
            style={{ height: '99%', top: '1%' }}
          ></div>
          {itineries.map((itinery, index) => (
            <MountainItinery key={itinery.id} index={index} itinery={itinery} />
          ))}
        </div>

        <Packages packages={packages} />
        <Pricing routeDuration={duration} />
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
