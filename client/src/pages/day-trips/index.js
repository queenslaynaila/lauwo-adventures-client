import DayTripCard from '@/components/DayTripCard';

const HeroSection = ({ dayTrips }) => {
  return (
    <div className="font-poly">
      <header className="w-full h-1/2 lg:h-96 bg-[url('/g-3.jpg')] bg-cover bg-center flex justify-center items-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <h1 className="text-white text-center text-lg lg:text-2xl font-semibold mt-16 mx-6 z-0">
          Who says you need a month to discover Tanzania? Join our day trips for
          a lightning-fast adventure! Warning: side effects may include
          unforgettable memories and a serious case of wanderlust.
        </h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
        {dayTrips.map((day) => (
          <DayTripCard key={day.id} day={day} />
        ))}
      </div>
    </div>
  );
};
export default HeroSection;
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/day_trips');
  const dayTrips = await res.json();

  return {
    props: { dayTrips },
  };
}
