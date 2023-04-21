import Image from 'next/image';
import Head from 'next/head';

function Index({ culturalTours }) {
  console.log(culturalTours);
  const tour = culturalTours[0];
  return (
    <>
    
   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8  bg-gray-200">
        <div className="relative h-80 md:h-auto mt-20">
          <Image
            src="/culture.jpg"
            alt={tour.name}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-2 text-gradient mt-20 ">
            {tour.name.toUpperCase()}
          </h1>
          <p className="text-lg mb-2 text-gray-600">{tour.location}</p>
          <p className="text-lg mb-4 text-gray-700">{tour.description}</p>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Inclusions:</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {tour.inclusions
              .toUpperCase()
              .split(', ')
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-200">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Itineraries:
          </h2>
          <ul className="list-decimal list-inside mb-4 text-gray-700">
            {tour.itinerary}
          </ul>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Exclusions:</h2>
          <ul className="list-decimal list-inside mb-4 text-gray-700">
            {tour.exclusions
              .toUpperCase()
              .split(', ')
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Price: ${tour.price}
          </h2>
        </div>

        <div className="flex items-end justify-end">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-yellow-600">
            Book now
          </button>
        </div>
      </div> 
    
     
    </>
  );
}

export default Index;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/cultural_tours');
  const culturalTours = await res.json();
  return {
    props: { culturalTours },
  };
}
