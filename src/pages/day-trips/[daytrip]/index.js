import Image from 'next/image';
import Head from 'next/head';
import Popup from 'reactjs-popup';
import BookingForm from '@/components/BookingForm';
import { generateSlug } from '@/utils/generateSlug';
import { useRouter } from 'next/router';
import { FaCheck, FaTimes, FaDollarSign } from 'react-icons/fa';

export default function Trip({ trips }) {
  const router = useRouter();
  const path = router.query.daytrip;
  const trip = trips.find((trip) => generateSlug(trip.name) === path);
  console.log(trip);
  const bookableType = 'DayTrip';
  const adventure = {
    name: `${trip.name} day trip`,
    id: trip.id,
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
        <title>{trip.name} Trip</title>
        <meta name="description" content={trip.description} />
        <meta property="og:title" content={`${trip.name} Trip`} />
        <meta property="og:description" content={trip.description} />
        <meta property="og:image" content={trip.image_url} />
        <meta
          property="og:url"
          content={`https://your-website.com/daytrips/${generateSlug(
            trip.name
          )}`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/g-3.jpg)' }}
      >
        <div className="inset bg-black/80">
          <div className="border-l-2 border-black h-1/2 text-white ">
            <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl xl font-poly capitalize text-center pt-32 pb-12 z-0">
              {trip.name} trip
            </h3>
            <div
              key={trip.id}
              className="flex relative flex-col md:flex-row mx-16 gap-4"
            >
              <div className="mb-6">
                <Image
                  src={trip.image_url}
                  alt={trip.name}
                  width={600}
                  height={400}
                  className="rounded-lg h-96 object-cover object-center"
                />
              </div>
              <div className="md:w-1/2">
                <p className="mb-4 text-lg">{trip.description}</p>
                <div className="text-center h-24">
                  <Popup
                    trigger={
                      <button className="bg-yellow-500 text-white px-8 rounded-md py-4 ml-auto mb-16 hover:bg-yellow-700">
                        Book Slot
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
        </div>
        <div></div>
      </div>
      <div>
        <ul>
          <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
            <div className="lg:ml-6 font-semibold">Price:</div>
            <div className="single_tour_inclusions_content flex-grow flex flex-wrap lg:flex-col">
              <div className="w-full capitalize p-2 flex items-center">
                <FaDollarSign className="mr-1" />
                {trip.price.replace('$', '')}
              </div>
            </div>
          </li>
          <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
            <div className="lg:ml-6 font-semibold">Inclusions:</div>
            <div className="single_tour_inclusions_content flex-grow flex flex-wrap lg:flex-col">
              {trip.inclusions.split(',').map((inclusion) => (
                <div
                  key={inclusion}
                  className="w-full capitalize p-2 flex items-center"
                >
                  <FaCheck className="mr-1" />
                  {inclusion.trim()}
                </div>
              ))}
            </div>
          </li>
          <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-16 my-6">
            <div className="font-semibold lg:ml-6">Exclusions:</div>
            <div className="single_tour_inclusions_content flex-grow flex flex-wrap lg:flex-col">
              {trip.exclusions.split(',').map((exclusion) => (
                <div
                  key={exclusion}
                  className="w-full capitalize p-2 flex items-center"
                >
                  <FaTimes className="mr-1" />
                  {exclusion.trim()}
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/day_trips');
  const trips = await res.json();
  return {
    props: {
      trips,
    },
  };
}