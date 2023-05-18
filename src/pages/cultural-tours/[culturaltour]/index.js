import Image from 'next/image';
import Popup from 'reactjs-popup';
import BookingForm from '@/components/BookingForm';
import Head from 'next/head';
import { generateSlug } from '@/utils/generateSlug';
function Tour({ tour }) {
  const bookableType = 'CulturalTour';
  const adventure = {
    name: `${tour.name} day trip`,
    id: tour.id,
  };
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
    backgroundColor: 'white',
  };

  return (
    <>
      <Head>
        <title>{tour.name} - Cultural Tour</title>
        <meta name="description" content={tour.description} />
        <meta property="og:title" content={tour.name} />
        <meta property="og:description" content={tour.description} />
        <meta property="og:image" content="/culture.jpg" />
        <meta
          property="og:url"
          content={`https://lauwo-adventures-api.onrender.com/cultural_tours/${tour.slug}`}
        />
      </Head>
      <div
        className="bg-cover bg-center  inset-0 bg-black bg-opacity-100"
        style={{ backgroundImage: `url(/background1.webp)` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="relative h-80 md:h-auto mt-20">
            <Image
              src="/culture.webp"
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
            <p className="text-lg mb-2 text-white ">{tour.location}</p>
            <p className="text-lg mb-4 text-white ">{tour.description}</p>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Inclusions:
            </h2>
            <ul className="list-disc list-inside mb-4 text-white">
              {tour.inclusions
                .toUpperCase()
                .split(', ')
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="md:col-span-2">
            <hr className="w-full border border-primary m-3 " />
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Itineraries:
            </h2>
            <ul className="list-decimal list-inside mb-4 text-white bg-y">
              {tour.itinerary}
            </ul>

            <h2 className="text-2xl font-bold  mt-2 mb-2 text-gray-900">
              Exclusions:
            </h2>
            <ul className="list-decimal list-inside mb-4 text-white">
              {tour.exclusions
                .toUpperCase()
                .split(', ')
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Price: $130
            </h2>
          </div>

          <div className="flex items-end justify-end">
            <div className="flex  items-center justify-center">
              <Popup
                trigger={
                  <button className="bg-black text-white px-8 rounded-md py-4 ml-auto mb-16 hover:border-white hover:border hover:text-white hover:bg-transparent">
                    {' '}
                    Book Now
                  </button>
                }
                modal
                nested
                closeOnDocumentClick
                contentStyle={contentStyle}
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <BookingForm
                      adventure={adventure}
                      bookableType={bookableType}
                    />
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tour;

export async function getStaticPaths() {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/cultural_tours'
  );
  const culturalTours = await res.json();
  const paths = culturalTours.map((tour) => ({
    params: { culturaltour: generateSlug(tour.name), id: tour.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    'https://lauwo-adventures-api.onrender.com/cultural_tours'
  );
  const culturalTours = await res.json();
  const culturalTour = culturalTours.find(
    (culturalTour) => generateSlug(culturalTour.name) === params.culturaltour
  );
  return {
    props: { tour: culturalTour },
  };
}
