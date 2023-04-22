import { generateSlug } from '@/utils/generateSlug';
import { useRouter } from 'next/router';

export default function DayTrip({ dayTrips }) {
  const router = useRouter();
  const path = router.query.daytrip;
  const trip = dayTrips.find((trip) => generateSlug(trip.name) === path);
  return (
    <>
      <header className="w-full h-1/2 bg-[url('/g-3.jpg')]  lg:h-96 bg-cover bg-center flex justify-center items-center relative"></header>
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/day_trips');
  const dayTrips = await res.json();

  return {
    props: {
      dayTrips,
    },
  };
}
