 
import { generateSlug } from '@/utils/generateSlug';
import RouteCard from '@/components/RouteCard';
import MountainItinery from '@/components/MountainItinery';
import Packages from '@/components/Packages';
const RouteSection = ({route,duration}) => {
  return (
 <div className='font-poly'>
    <RouteCard route={route} duration={duration}/>
    <MountainItinery />
    <Packages/>
 </div>
  );
};

export default RouteSection;
 

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/mountains');
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
    
    // Extract route name and duration from route string
    const words = route.split('-');
    const routeName = words.slice(0, -2).join(' ');
    const duration = words.slice(-2, -1)[0];
    
    // Fetch all mountains
    const res = await fetch('http://localhost:3000/mountains');
    const mountains = await res.json();
  
    // Find the mountain that matches the slug in the URL
    const mountainData = mountains.find(
      (mtn) => generateSlug(mtn.mountain_name) === mountain
    );
    
    // Find the route that matches the route name in the URL
    const RouteData = mountainData.routes.find(
      (route) => route.route_name.toLowerCase() === routeName
    );
    
    // Fetch all route durations
    const res2 = await fetch('http://localhost:3000/route_durations');
    const routeDurations = await res2.json();
    
    // Find the route duration that matches the duration and route name in the URL
    const routeDuration = routeDurations.find((routeDuration) => {
      return routeDuration.duration_days === parseInt(duration) && routeDuration.route_name === RouteData.route_name;
    });
    
    // Extract the itineraries from the route duration
    const { itineries, ...routeDetails } = routeDuration;
    
    // Return the props with separate route and itinerary objects
    return {
      props: {
        route:  RouteData,
        itineries: itineries,
        routeDetails: routeDetails,
        duration: duration
      },
    };
  }
  