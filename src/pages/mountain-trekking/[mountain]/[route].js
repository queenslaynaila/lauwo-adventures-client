import { generateSlug } from '@/utils/generateSlug';
import RouteCard from '@/components/RouteCard';
import MountainItinery from '@/components/MountainItinery';
import Packages from '@/components/Packages';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const RouteSection = ({ mountains }) => {
  const bookableType = 'Mountain';

  const router = useRouter();
  const moutainPath = router.query.mountain;
  const routePath = router.query.route;

  const mountain = mountains.find(
    (mtn) => generateSlug(mtn.mountain_name) === moutainPath
  );

  // Extract route name and duration from route string
  const words = routePath.split('-');
  const routeName = words.slice(0, -2).join(' ');
  const duration = words.slice(-2)[0];

  // Find the route that matches the route name in the URL
  const route = mountain.routes.find(
    (route) => route.route_name.toLowerCase() === routeName
  );

  const [routeDuration, setRouteDuration] = useState({});
  const [itineries, setItineries] = useState([]);
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const fetchRouteDurations = async () => {
      const res = await fetch('http://localhost:3000/route_durations');
      const routeDurations = await res.json();
      const routeDuration = routeDurations.find(
        (routeDuration) => routeDuration.duration_days === parseInt(duration)
      );
      if (routeDuration) {
        const { itineries, ...routeDetails } = routeDuration;
        setItineries(itineries);
        setPackages(routeDetails);
        setRouteDuration(routeDuration);
      }
    };
    fetchRouteDurations();
  }, [duration]);

  return (
    <>
      <div className="font-poly mb-4">
        <RouteCard
          route={route}
          duration={duration}
          bookableType={bookableType}
          routeDuration={routeDuration}
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
      </div>
    </>
  );
};

export default RouteSection;

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/mountains');
  const mountains = await res.json();

  return {
    props: {
      mountains,
    },
  };
}
