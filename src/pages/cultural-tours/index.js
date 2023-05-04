import CulturalTourCard from '../../components/CulturalTourCard';

function Tours({ tours }) {
  return (
    <div>
      <header className="w-full h-1/2 lg:h-96 bg-[url('/lions.jpg')] bg-cover bg-center flex justify-center items-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <h1 className="text-white text-center text-lg lg:text-2xl font-semibold mt-16 mx-6 z-0">
          Discover Tanzania in less time with our lightning-fast cultural tour
          trips, taking you on a journey through the heart of Tanzanian culture
          from city to village. Book now for an unforgettable adventure!
        </h1>
      </header>

      <div className="gap-4 mt-6 mx-16 my-6 relative  max-h-[calc(100vh-300px)]">
        <div className="flex flex-wrap justify-center">
          {tours.map((tour) => (
            <div key={tour.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <CulturalTourCard
                tour={tour}
                className="max-w-full sm:max-w-xs"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tours;

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/cultural_tours');
  const tours = await res.json();
  return {
    props: { tours },
  };
}
