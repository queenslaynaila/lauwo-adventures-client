import CulturalTourCard from '../../components/CulturalTourCard';
import Head from 'next/head';

function Tours({ tours }) {
  return (
    <div>
      <Head>
        <title>Discover Tanzania&apos; Cultural Tours - Book Now</title>
        <meta
          name="description"
          content="Join our lightning-fast cultural tour trips, taking you on a journey through the heart of Tanzanian culture from city to village. Book now for an unforgettable adventure!"
        />
        <meta
          name="keywords"
          content="Tanzania, cultural tours, adventure, book now"
        />
      </Head>
      <header className="w-full h-1/2 lg:h-96 bg-[url('/maasai.jpg')] bg-cover bg-center flex justify-center items-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <h1 className="text-white text-center text-lg lg:text-2xl font-semibold mt-16 mx-6 z-0">
          Discover Tanzania in less time with our lightning-fast cultural tour
          trips, taking you on a journey through the heart of Tanzanian culture
          from city to village. Book now for an unforgettable adventure!
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
        {tours.map((tour) => (
          <div key={tour.id}>
            <CulturalTourCard tour={tour} />
          </div>
        ))}
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
